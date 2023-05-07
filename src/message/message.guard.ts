import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ChatsService } from '../chats/chats.service';

@Injectable()
export class MessageGuard implements CanActivate {
  constructor(private chatsService: ChatsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const chatId = request.params.id;
    const userId = request.user.id;

    const chat = await this.chatsService.findOne(chatId);

    if (!chat) {
      // chat not found, deny access
      throw new HttpException('Invalid chat id', HttpStatus.NOT_FOUND);
    }

    let found = false;

    chat.members.map((mem) => {
      if (mem.userId === userId) {
        found = true;
      }
    });
    if (chat.ownerId === userId) {
      found = true;
    }
    return found;
  }
}
