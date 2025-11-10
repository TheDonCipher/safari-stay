import { Reservation, Channel, RoomRate } from './types';

export const MOCK_RESERVATIONS: Reservation[] = [
  { id: 'RES-001', guestName: 'John Doe', checkIn: '2024-08-01', checkOut: '2024-08-05', channel: 'Booking.com', roomType: 'Queen Deluxe', status: 'Confirmed', total: 450.00 },
  { id: 'RES-002', guestName: 'Jane Smith', checkIn: '2024-08-02', checkOut: '2024-08-04', channel: 'Airbnb', roomType: 'King Suite', status: 'Confirmed', total: 600.50 },
  { id: 'RES-003', guestName: 'Peter Jones', checkIn: '2024-08-03', checkOut: '2024-08-06', channel: 'Direct', roomType: 'Twin Room', status: 'Pending', total: 320.00 },
  { id: 'RES-004', guestName: 'Mary Williams', checkIn: '2024-08-05', checkOut: '2024-08-10', channel: 'Expedia', roomType: 'Queen Deluxe', status: 'Confirmed', total: 550.00 },
  { id: 'RES-005', guestName: 'David Brown', checkIn: '2024-08-06', checkOut: '2024-08-07', channel: 'Booking.com', roomType: 'King Suite', status: 'Cancelled', total: 300.25 },
  { id: 'RES-006', guestName: 'Linda Davis', checkIn: '2024-08-08', checkOut: '2024-08-12', channel: 'Direct', roomType: 'Queen Deluxe', status: 'Confirmed', total: 480.00 },
];

export const MOCK_CHANNELS: Channel[] = [
    { id: 'booking', name: 'Booking.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/1200px-Booking.com_logo.svg.png', status: 'Connected', bookings: 120, revenue: 54000 },
    { id: 'airbnb', name: 'Airbnb', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png', status: 'Connected', bookings: 85, revenue: 42500 },
    { id: 'expedia', name: 'Expedia', logo: '', status: 'Connected', bookings: 65, revenue: 31200 },
    { id: 'google', name: 'Google Hotels', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png', status: 'Connected', bookings: 42, revenue: 15000 },
    { id: 'agoda', name: 'Agoda', logo: '', status: 'Pending', bookings: 0, revenue: 0 },
    { id: 'hostelworld', name: 'Hostelworld', logo: '', status: 'Disconnected', bookings: 0, revenue: 0 },
];

export const MOCK_CHART_DATA = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 4500 },
  { name: 'May', revenue: 6000 },
  { name: 'Jun', revenue: 5500 },
  { name: 'Jul', revenue: 7000 },
];

export const MOCK_PIE_DATA = [
    { name: 'Booking.com', value: 400 },
    { name: 'Airbnb', value: 300 },
    { name: 'Expedia', value: 200 },
    { name: 'Direct', value: 100 },
];

export const MOCK_RATE_DATA: RoomRate[] = [
    {
        name: 'Savanna Queen Deluxe',
        rates: [150, 150, 165, 165, 180, 180, 160],
        availability: [5, 4, 2, 2, 0, 1, 3],
    },
    {
        name: 'Baobab King Suite',
        rates: [220, 220, 240, 240, 260, 260, 230],
        availability: [3, 3, 1, 0, 0, 1, 2],
    },
    {
        name: 'Kilimanjaro Twin Room',
        rates: [120, 120, 130, 130, 145, 145, 125],
        availability: [8, 8, 6, 5, 2, 4, 7],
    },
    {
        name: 'Zambezi Family Villa',
        rates: [350, 350, 380, 380, 420, 420, 370],
        availability: [2, 1, 1, 0, 0, 0, 1],
    },
];