import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class AddUserDto {
  @ApiProperty()
  @IsNotEmpty()
  user_id: number;
  @ApiProperty()
  @IsNotEmpty()
  admin: boolean;
}
