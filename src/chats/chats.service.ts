import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Chat, ChatMember } from './entities/chat.entity';
import { Repository } from 'typeorm';
import { Message } from '../message/entities/message.entity';

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(Chat)
    private chatsRepository: Repository<Chat>,
    @InjectRepository(Message)
    private messageRepository: Repository<Message>,
  ) {}
  async create(createChatDto: CreateChatDto) {
    const created = this.chatsRepository.create(createChatDto);
    return await this.chatsRepository.save(created);
  }

  async getParticipated(user_id: number) {
    return await Chat.createQueryBuilder('chat')
      .leftJoinAndSelect('chat.members', 'member')
      .where('chat.ownerId = :userId OR member.userId = :userId', {
        userId: user_id,
      })
      .getMany();
  }

  findAll() {
    return this.chatsRepository.find();
  }

  findOne(id: number) {
    return this.chatsRepository.findOneBy({ id });
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return this.chatsRepository.update({ id }, updateChatDto);
  }

  deleteChat(id: number) {
    return this.chatsRepository.delete({ id });
  }

  async addMember(userId: number, chatId: number, admin: boolean) {
    const chat = await this.chatsRepository.findOneBy({ id: chatId });
    const newChatMember = new ChatMember();
    newChatMember.admin = admin;
    newChatMember.userId = userId;
    chat.members.push(newChatMember);
    return await this.chatsRepository.save(chat);
  }
}
