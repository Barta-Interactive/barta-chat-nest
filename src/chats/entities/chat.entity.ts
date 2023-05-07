import { Column, PrimaryGeneratedColumn, Entity, BaseEntity } from 'typeorm';

@Entity()
export class ChatMember {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @Column({ nullable: true, default: false })
  admin?: boolean;
}

@Entity()
export class Chat extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  ownerId: number;
  @Column()
  description: string;
  @Column({ nullable: true })
  displayPicture?: string;
  @Column({ type: 'json', nullable: true })
  members: ChatMember[];
}
