import {
    Entity, PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({name: 'ticket_purchase_history'})

export class PurchaseHistoryEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({name: 'ticket_id'})
    ticketId!: string;

    @Column({name: 'user_id'})
    userId!: string;


}
