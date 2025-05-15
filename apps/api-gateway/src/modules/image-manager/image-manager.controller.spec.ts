import { Test, TestingModule } from '@nestjs/testing';
import { ImageManagerController } from './image-manager.controller';

describe('ImageManagerController', () => {
  let controller: ImageManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageManagerController],
    }).compile();

    controller = module.get<ImageManagerController>(ImageManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
