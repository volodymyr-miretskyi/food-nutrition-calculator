import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Meal } from '@schemas/record.schema';

@Injectable()
export class MealsRepository {
  constructor(
    @InjectModel(Meal.name) private readonly mealSchema: Model<Meal>,
  ) {}

  async saveMeal(params: Meal): Promise<Meal> {
    const image = new this.mealSchema(params);
    const result = await image.save();
    return result;
  }

  async getAllMeals(): Promise<Meal[]> {
    const images = await this.mealSchema.find().lean();
    return images;
  }
}
