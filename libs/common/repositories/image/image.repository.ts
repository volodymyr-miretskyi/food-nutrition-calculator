import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Image } from '@schemas/image.schema';

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

  async getAllImages(): Promise<Image[]> {
    const images = await this.imageSchema.find().lean();
    return images;
  }
}
