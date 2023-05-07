import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user-dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsNotEmpty()
  bio: string;
  @ApiProperty()
  @IsNotEmpty()
  profilePic: string;
}
