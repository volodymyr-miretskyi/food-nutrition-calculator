import { Test, TestingModule } from '@nestjs/testing';
import { ImageManagerAppController } from './image-manager-app.controller';
import { ImageManagerAppService } from './image-manager-app.service';

describe('ImageManagerAppController', () => {
  let imageManagerAppController: ImageManagerAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ImageManagerAppController],
      providers: [ImageManagerAppService],
    }).compile();

    imageManagerAppController = app.get<ImageManagerAppController>(ImageManagerAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(imageManagerAppController.getHello()).toBe('Hello World!');
    });
  });
});
