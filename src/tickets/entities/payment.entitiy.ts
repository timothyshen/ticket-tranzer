import { Entity, Column, PrimaryColumn } from 'typeorm';
// Payment Entity
@Entity({ name: 'payment' })
export class PaymentEntity {
  // User ID
  @PrimaryColumn()
  userid!: string;

  // Ticket ID
  @Column({ name: 'ticket_id' })
  ticketId!: number;

  // Reference ID
  @Column({ name: 'reference_id' })
  referenceId!: number;

  // Purchase Date
  @Column({ name: 'purchase_date' })
  purchaseDate!: Date;

  // Purchase Amount
  @Column({ name: 'purchase_amount' })
  purchaseAmount!: number;
}
