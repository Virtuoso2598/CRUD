import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column({unique: true})
  public displayName: string;

  @OneToMany(() => User, (user: User) => user.groups)
  public users: User[];
}