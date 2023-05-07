import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { AuthGuard } from '../auth/auth.guard';
import { MessageGuard } from './message.guard';

@Controller('message')
@UseGuards(AuthGuard, MessageGuard)
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  async create(@Body() createMessageDto: CreateMessageDto, @Request() req) {
    return await this.messageService.create(
      createMessageDto,
      Number(req.user.userId),
    );
  }

  @Get('/:chat_id')
  async findAll(@Param('chat_id') chatId: string) {
    return await this.messageService.findAll(Number(chatId));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.messageService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateMessageDto: UpdateMessageDto,
    @Request() req,
  ) {
    return await this.messageService.update(
      +id,
      updateMessageDto,
      Number(req.user.userId),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req) {
    return this.messageService.remove(+id, Number(req.user.userId));
  }
}
