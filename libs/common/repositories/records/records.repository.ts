import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Record } from '@schemas/record.schema';

@Injectable()
export class RecordsRepository {
  constructor(
    @InjectModel(Record.name) private readonly recordSchema: Model<Record>,
  ) {}

  async saveRecord(params: Record): Promise<Record> {
    const image = new this.recordSchema(params);
    const result = await image.save();
    return result;
  }

  async getAllRecords(): Promise<Record[]> {
    const images = await this.recordSchema.find().lean();
    return images;
  }
}
