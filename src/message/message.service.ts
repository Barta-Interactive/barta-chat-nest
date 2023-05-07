import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Message } from './entities/message.entity';
import { Chat } from '../chats/entities/chat.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
    @InjectRepository(Chat)
    private chatRepository: Repository<Chat>,
  ) {}

  async create(createMessageDto: CreateMessageDto, userId: number) {
    const created = this.messageRepository.create({
      userId: userId,
      chat_id: createMessageDto.chat_id,
      message_text: createMessageDto.message_text,
    });
    return await this.messageRepository.save(created);
  }

  async findAll(chat_id: number) {
    const messages = await this.messageRepository.findBy({
      chat_id: chat_id,
    });
    messages.sort((a, b) => a.created_at.getTime() - b.created_at.getTime());
    return messages;
  }

  async findOne(id: number) {
    return await this.messageRepository.findOneBy({
      id: id,
    });
  }

  async update(
    id: number,
    updateMessageDto: UpdateMessageDto,
    user_id: number,
  ) {
    return await this.messageRepository.update(
      {
        userId: user_id,
        id: updateMessageDto.message_id,
      },
      {
        message_text: updateMessageDto.message_text,
      },
    );
  }

  async remove(id: number, user_id: number) {
    const message = await this.messageRepository.findOneBy({
      id: id,
    });
    if (message.userId === user_id) {
      return await this.messageRepository.remove(message);
    }
    const chat = await this.chatRepository.findOneBy({
      id: message.chat_id,
    });
    if (chat.ownerId === user_id) {
      return await this.messageRepository.remove(message);
    }
    for (const member of chat.members) {
      if (member.userId === user_id && member.admin === true) {
        return await this.messageRepository.remove(message);
      }
    }
    throw new HttpException(
      'you do not have permissions to delete this message',
      HttpStatus.FORBIDDEN,
    );
  }
}
