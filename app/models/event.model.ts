export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  type: string;
  genre: string;
  price: number;
  organizer: string;
  isSponsored: boolean;
}