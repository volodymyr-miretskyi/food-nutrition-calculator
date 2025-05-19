import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

import { S3UploadResult } from '@interfaces/s3/s3.interface';

@Injectable()
export class S3Service {
  private s3: S3Client;
  private bucket: string;
  private region: string;

  constructor(private readonly configService: ConfigService) {
    this.region = configService.get('AWS_REGION') ?? 'us-east-1';
    this.bucket = configService.get('AWS_BUCKET') ?? 'image-service';
    const accessKeyId = configService.get('AWS_ACCESS_KEY_ID');
    const secretAccessKey = configService.get('AWS_SECRET_ACCESS_KEY');

    this.s3 = new S3Client({
      region: this.region,
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
      },
    });
  }

  async upload(file: Express.Multer.File): Promise<S3UploadResult> {
    try {
      const key = `uploads/${uuidv4()}-${file.originalname}`;
      const buffer = Buffer.from(file.buffer);

      await this.s3.send(
        new PutObjectCommand({
          Key: key,
          Body: buffer,
          Bucket: this.bucket,
          ContentType: file.mimetype,
        }),
      );

      return {
        url: `https://${this.bucket}.s3.${this.region}.amazonaws.com/${key}`,
        name: file.originalname,
        type: file.mimetype,
        size: file.size,
      };
    } catch (error) {
      throw new Error('Error uploading file to S3: ' + error);
    }
  }
}
