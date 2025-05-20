import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Photo>;

@Schema()
export class Photo {
  @Prop()
  url: string;

  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  size: number;
}

export const PhotoSchema = SchemaFactory.createForClass(Photo);
