export interface Room {
    id: number;
    roomNumber: number;
    capacity: number;
    occupied: number;
    isOpen: boolean;
    cinemaId: number;
  }