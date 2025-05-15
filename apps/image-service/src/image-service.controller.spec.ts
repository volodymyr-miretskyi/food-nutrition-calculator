import { Test, TestingModule } from '@nestjs/testing';
import { ImageServiceController } from './image-service.controller';
import { ImageServiceService } from './image-service.service';

describe('ImageManagerAppController', () => {
  let imageManagerAppController: ImageServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ImageServiceController],
      providers: [ImageServiceService],
    }).compile();

    imageManagerAppController = app.get<ImageServiceController>(
      ImageServiceController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(imageManagerAppController.getHello()).toBe('Hello World!');
    });
  });
});
