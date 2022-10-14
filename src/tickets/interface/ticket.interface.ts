interface TicketInterface {
  origin: string;
  destination: string;
  travelClass: number;
  trainPreferred: boolean;
  tramPreferred: boolean;
  busPreferred: boolean;
  subwayPreferred: boolean;
  nPerson: number;
  arrivalTime: Date;
}
