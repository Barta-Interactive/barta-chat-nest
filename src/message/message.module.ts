import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { Message } from './entities/message.entity';
import { ChatsModule } from '../chats/chats.module';
import { Chat } from '../chats/entities/chat.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message, Chat]),
    ChatsModule,
    UsersModule,
  ],
  controllers: [MessageController],
  providers: [MessageService],
})
export class MessageModule {}
