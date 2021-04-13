import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from '../../groups/entities/group.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({unique: true})
  email: string;

  @Column({unique: true})
  username: string;

  @Column({nullable: true})
  displayName: string;

 //@OneToMany(() => Group, (group: Group) => group.users)
 //public groups: Group[];

 @ManyToOne(() => Group, (group: Group) => group.users)
 public groups: Group[];
}

