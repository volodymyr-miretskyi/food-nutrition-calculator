import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ImageDocument = HydratedDocument<Image>;

@Schema()
export class Image {
  @Prop()
  name: string;

  @Prop()
  key: string;

  @Prop()
  type: string;

  @Prop()
  size: number;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
