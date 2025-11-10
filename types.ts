
export type Page = 'Dashboard' | 'Reservations' | 'Channels' | 'Rates' | 'Settings';
export type View = 'landing' | 'features' | 'pricing' | 'contact' | 'app';

export interface Reservation {
  id: string;
  guestName: string;
  checkIn: string;
  checkOut: string;
  channel: string;
  roomType: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  total: number;
}

export interface Channel {
  id: string;
  name: string;
  logo: string;
  status: 'Connected' | 'Disconnected' | 'Pending';
  bookings: number;
  revenue: number;
}

export interface RoomRate {
    name: string;
    rates: (number | null)[];
    availability: (number | null)[];
}
