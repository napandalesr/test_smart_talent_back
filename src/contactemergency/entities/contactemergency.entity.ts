import { Booking } from "src/booking/entities/booking.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contactemergency {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'text'})
  name: string;

  @Column({type:'int'})
  telephone: number;

  @ManyToOne(() => Booking, (booking) => booking.contactemergency, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  booking: Booking;
}
