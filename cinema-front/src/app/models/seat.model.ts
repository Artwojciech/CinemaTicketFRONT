export interface Seat {
    id: number;
    rowLetter: string;
    columnNumber: number;
    isOccupied: boolean;
    roomId: number;
    typeId: number;
  }