import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeatService } from '../../services/seat/seat.service';
import { Seat } from '../../models/seat.model';
import { CommonModule } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-seat-map',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.css'],
})
export class SeatMapComponent implements OnInit {
  seats: Seat[] = [];
  rows: Seat[][] = [];
  selectedSeat: Seat | null = null;
  projectionId: number | null = null;

  constructor(
    private seatService: SeatService, 
    private route: ActivatedRoute, 
    private router: Router
  ) {}

  ngOnInit() {
    this.projectionId = Number(this.route.snapshot.paramMap.get('projectionId'));

    if (this.projectionId) {
      this.seatService.getSeatsWithTypes(this.projectionId).subscribe(
        (seats) => {
          this.seats = seats;
          this.createRows();
          console.log('Fetched seats:', this.seats);
        },
        (error) => {
          console.error('Error fetching seats:', error);
        }
      );
    }
  }

  createRows() {
    const rowMap = new Map<string, Seat[]>();
    this.seats.forEach((seat) => {
      if (!rowMap.has(seat.rowLetter)) {
        rowMap.set(seat.rowLetter, []);
      }
      rowMap.get(seat.rowLetter)?.push(seat);
    });
    this.rows = Array.from(rowMap.values()).map((row) =>
      row.sort((a, b) => a.columnNumber - b.columnNumber)
    );
  }

  selectSeat(seat: Seat) {
    if (!seat.isOccupied) {
      if (this.selectedSeat?.id === seat.id) {
        this.selectedSeat = null;
      } else {
        this.selectedSeat = seat;
      }
    }
  }

  navigateToPayment() {
    if (this.selectedSeat) {
      this.route.queryParams.subscribe((params) => {
        this.router.navigate(['/payment'], {
          queryParams: {
            city: params['city'] || 'Unknown City',
            cinema: params['cinema'] || 'Unknown Cinema',
            time: params['time'] || 'Unknown Time',
            row: this.selectedSeat!.rowLetter || 'Unknown Row',
            column: this.selectedSeat!.columnNumber || 0,
            type: this.selectedSeat!.typeName || 'Unknown Type',
            cost: this.selectedSeat!.cost || 0,
            film: params['film'] || 'Unknown Film',
          },
        });
      });
    } else {
      console.error('No seat selected.');
    }
  }
  
}
