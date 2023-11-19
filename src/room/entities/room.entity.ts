import { Booking } from "src/booking/entities/booking.entity";
import { Hotel } from "src/hotel/entities/hotel.entity";
import { typeRoomEnum } from "src/types/enums";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'float'})
  price: string;

  @Column({
    type: 'enum',
    enum: typeRoomEnum
  })
  type: typeRoomEnum;

  @Column({type:'float'})
  tax: string;

  @Column({type:'int'})
  amountPerson: number;

  @Column({type:'date'})
  entryDate: string;

  @Column({type:'date'})
  dapartureDate: string;

  @ManyToOne(() => Hotel, (hotel) => hotel.rooms, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  hotel: Hotel;

  @OneToMany(() => Booking, (booking) => booking.room, {
    eager: true,
    nullable: true,
    cascade: true,
  })
  booking?: Booking[];
}
