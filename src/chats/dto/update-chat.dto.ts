import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateChatDto } from './create-chat.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateChatDto extends PartialType(CreateChatDto) {
  @ApiProperty()
  @IsNotEmpty()
  displayPicture: string;
}
