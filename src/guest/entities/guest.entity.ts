import { Booking } from "src/booking/entities/booking.entity";
import { documentTypeEnum, typeGender } from "src/types/enums";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Guest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'text'})
  name: string;

  @Column({name:'last_name', type:'text'})
  lastName: string;

  @Column({type: 'date'})
  birthdate: string;

  @Column({
    type: 'enum',
    enum: typeGender
  })
  gender: typeGender;

  @Column({
    type: 'enum',
    enum: documentTypeEnum
  })
  documentType: documentTypeEnum;

  @Column({type:'int'})
  documentNumber: number;

  @Column({type:'text'})
  email: string;

  @Column({type:'int'})
  telephone: number;

  @Column({type:'int'})
  emergencyContact: number;

  @Column({type:'text'})
  contactName: string;

  @Column({type:'int'})
  contactTelephone: number;

  @ManyToOne(() => Booking, (booking) => booking.guests, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  booking: Booking;
}
