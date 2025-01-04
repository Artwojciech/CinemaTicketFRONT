import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-payment-site',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './payment-site.component.html',
  styleUrls: ['./payment-site.component.css'],
})
export class PaymentSiteComponent implements OnInit {
  city: string | null = null;
  cinema: string | null = null;
  time: string | null = null;
  row: string | null = null;
  column: number | null = null;
  type: string | null = null;
  cost: number | null = null;
  film: string | null = null;
  paymentMethod: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.city = params['city'];
      this.cinema = params['cinema'];
      this.time = params['time'];
      this.row = params['row'];
      this.column = +params['column'];
      this.type = params['type'];
      this.cost = +params['cost'];
      this.film = params['film'];
    });
  }

  selectPaymentMethod(method: string) {
    this.paymentMethod = method;
  }
}
