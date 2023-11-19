import { 
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm";
import { hash } from "bcryptjs";
import { RoleEnum } from "src/types/enums";
import { Hotel } from "src/hotel/entities/hotel.entity";
import { Booking } from "src/booking/entities/booking.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({type:'text'})
  name:string;

  @Column({name:'last_name', type:'text'})
  lastName:string;

  @Column({type:'text'})
  email:string;

  @Column({
    type:'varchar',
    length:255, 
    nullable: false
  })
  password:string;

  @Column({
    type: 'enum',
    enum: RoleEnum
  })
  role: RoleEnum;

  @OneToMany(() => Hotel, (hotel) => hotel.user, {
    eager: true,
    nullable: true,
    cascade: true,
  })
  hotel?: Hotel[];

  @OneToMany(() => Booking, (booking) => booking.user, {
    eager: true,
    nullable: true,
    cascade: true,
  })
  bookings?: Booking[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(){
    if(!this.password){
      return
    }
    this.password = await hash(this.password,10);
  }
}