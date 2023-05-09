import { forwardRef, Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { Message } from './entities/message.entity';
import { ChatsModule } from '../chats/chats.module';
import { Chat } from '../chats/entities/chat.entity';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message, Chat]),
    forwardRef(() => ChatsModule),
    UsersModule,
    EventEmitterModule.forRoot(),
  ],
  controllers: [MessageController],
  providers: [MessageService],
  exports: [MessageService],
})
export class MessageModule {}
