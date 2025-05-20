import { IsNumber, IsString, IsUrl } from 'class-validator';

export class SavePhotoDto {
  @IsString()
  name: string;

  @IsNumber()
  size: number;

  @IsString()
  type: string;

  @IsUrl()
  url: string;
}
