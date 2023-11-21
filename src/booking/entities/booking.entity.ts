import { Contactemergency } from "src/contactemergency/entities/contactemergency.entity";
import { Guest } from "src/guest/entities/guest.entity";
import { Room } from "src/room/entities/room.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Room, (room) => room.booking, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  room: Room;

  @ManyToOne(() => User, (user) => user.bookings, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: User;

  @OneToMany(() => Guest, (guest) => guest.booking, {
    eager: true,
    nullable: true,
    cascade: true,
  })
  guests?: Guest[];

  @OneToMany(() => Contactemergency, (contactemergency) => contactemergency.booking, {
    eager: true,
    nullable: true,
    cascade: true,
  })
  contactemergency?: Contactemergency[]
}
