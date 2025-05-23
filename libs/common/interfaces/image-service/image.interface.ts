import { IsNumber, IsString, IsUrl } from 'class-validator';

export class SaveImageDto {
  @IsString()
  name: string;

  @IsNumber()
  size: number;

  @IsString()
  type: string;

  @IsUrl()
  url: string;
}