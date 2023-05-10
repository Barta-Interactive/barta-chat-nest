import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  UseGuards,
  UnauthorizedException,
  Sse,
} from '@nestjs/common';
import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { AuthGuard } from '../auth/auth.guard';
import { AddUserDto } from './dto/add-user-dto';
import { ChatAdminOrOwnerGuard } from './admin.chat.guard';
import { map, Observable } from 'rxjs';
import { MessageService } from '../message/message.service';

interface CustomEvent {
  event: string;
  data: any;
}

@Controller('chats')
@UseGuards(AuthGuard)
export class ChatsController {
  constructor(
    private readonly chatsService: ChatsService,
    private readonly messageService: MessageService,
  ) {}

  @Get('/mine')
  async getMine(@Request() req) {
    return this.chatsService.getParticipated(Number(req.user.userId));
  }

  @Post()
  async create(@Body() createChatDto: CreateChatDto, @Request() req) {
    createChatDto.ownerId = Number(req.user.userId);
    return await this.chatsService.create(createChatDto);
  }

  @Get()
  findAll() {
    return this.chatsService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.chatsService.findOne(+id);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateChatDto: UpdateChatDto,
    @Request() req,
  ) {
    const chat = await this.chatsService.findOne(+id);
    if (chat.ownerId !== req.user.userId) {
      throw new UnauthorizedException();
    }
    return await this.chatsService.update(+id, updateChatDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.chatsService.deleteChat(+id);
  }

  @Sse('/:chatId/getUpdates')
  publishUpdates(): Observable<Partial<CustomEvent>> {
    return new Observable<Partial<CustomEvent>>((subscriber) => {
      const listener = (payload) => {
        subscriber.next({ event: 'newMessage', data: payload });
      };

      this.messageService.messageEmitter.addListener(
        'messageCreated',
        listener,
      );

      return () => {
        this.messageService.messageEmitter.removeListener(
          'messageCreated',
          listener,
        );
      };
    }).pipe(map((eventData: CustomEvent) => ({ ...eventData })));
  }

  @UseGuards(ChatAdminOrOwnerGuard)
  @Patch('/add/:id')
  async addMember(@Param('id') id: string, addUserDto: AddUserDto) {
    const chat = await this.chatsService.findOne(+id);
    return await this.chatsService.addMember(
      addUserDto.user_id,
      chat.id,
      addUserDto.admin,
    );
  }
}
