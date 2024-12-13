export interface Film {
    id: number;
    title: string;
    year: number;
    releaseDate: string; // ISO string format
    duration: number;
    ageCategory: string;
    genre: string;
    description: string;
    director: string;
    actors: string;
    imageUrl: string;
  }