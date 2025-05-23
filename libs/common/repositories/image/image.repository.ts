import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';

import { Image } from '@schemas/image.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ImageRepository {
  constructor(
    @InjectModel(Image.name) private readonly imageSchema: Model<Image>,
  ) {}

  async saveImage(params: Image): Promise<Image> {
    const image = new this.imageSchema(params);
    const result = await image.save();
    return result;
  }
}
