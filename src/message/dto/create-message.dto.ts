import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateMessageDto {
  @ApiProperty()
  @IsNotEmpty()
  message_text: string;
  @ApiProperty()
  @IsNotEmpty()
  chat_id: number;
}
