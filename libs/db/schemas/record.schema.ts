import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import {
  IIngredient,
  INutrient,
} from '@interfaces/ai-service/ai-service.interface';
import { Image } from './image.schema';

export type MealsDocument = HydratedDocument<Meal>;

@Schema({ timestamps: true })
export class Meal {
  @Prop()
  name: string;

  @Prop()
  ingredients: IIngredient[];

  @Prop()
  nutrients: INutrient[];

  @Prop({ type: Types.ObjectId, ref: Image.name })
  imageId: Types.ObjectId;

  @Prop()
  nickname?: string;

  @Prop()
  rate: number;

  @Prop()
  feedback?: string;
}

export const MealSchema = SchemaFactory.createForClass(Meal);
