import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
  @Column({ nullable: true })
  bio: string;
  @Column({ nullable: true })
  profilePic: string;
}
