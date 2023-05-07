import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { ChatsService } from './chats.service';

@Injectable()
export class ChatAdminOrOwnerGuard implements CanActivate {
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

    // check if user is chat owner
    if (chat.ownerId === userId) {
      return true;
    }

    // check if user is a chat admin
    const chatMember = chat.members.find((member) => member.userId === userId);
    if (chatMember && chatMember.admin) {
      return true;
    }

    // user is not owner or admin, deny access
    throw new HttpException('You are not an admin', HttpStatus.FORBIDDEN);
  }
}
