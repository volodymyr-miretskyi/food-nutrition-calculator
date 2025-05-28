import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { MealsService } from './meals.service';

import { IIngredient } from '@interfaces/ai-service/ai-service.interface';
import { Meal } from '@schemas/record.schema';

@Controller('meals')
export class MealsController {
  constructor(@Inject() private readonly mealService: MealsService) {}

  @Post('analyze-image')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    const result = this.mealService.analyzeImage(file);
    return result;
  }

  @Post('calculate-nutrients')
  async calculateNutrients(@Body() ingredients: IIngredient[]) {
    const result = this.mealService.calculateNutrients(ingredients);
    return result;
  }

  @Post('save')
  async saveRecord(@Body() params: Meal) {
    const result = this.mealService.saveRecord(params);
    return result;
  }

  @Get('get-all')
  async getAllRecords() {
    const result = this.mealService.getAllRecords();
    return result;
  }
}
