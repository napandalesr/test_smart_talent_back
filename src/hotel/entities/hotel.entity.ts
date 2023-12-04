import { Room } from "src/room/entities/room.entity";
import { statusHotelEnum } from "src/types/enums";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type:'text'})
  name: string;

  @Column({type:'text'})
  direction: string;

  @Column({type:'text'})
  city: string;

  @Column({
    type: 'enum',
    enum: statusHotelEnum,
    default: statusHotelEnum.ENABLE
  })
  status: statusHotelEnum;

  @ManyToOne(() => User, (user) => user.hotel, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: User;

  @OneToMany(() => Room, (room) => room.hotel, {
    eager: true,
    nullable: true,
    cascade: true,
  })
  rooms?: Room[];
}
