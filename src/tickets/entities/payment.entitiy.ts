import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'payment' })
export class PaymentEntity {
  @PrimaryColumn()
  userid!: string;

  @Column({ name: 'ticket_id' })
  ticketId!: number;

  @Column({ name: 'reference_id' })
  referenceId!: number;

  @Column({ name: 'purchase_date' })
  purchaseDate!: Date;

  @Column({ name: 'purchase_amount' })
  purchaseAmount!: number;
}
