import { Controller, Get, Param, Post } from '@nestjs/common';
import { AnimalEntity } from './animal.entity';
import { AnimalService } from './animal.service';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get('list')
  findAll(): Promise<AnimalEntity[]> {
    return this.animalService.findAll();
  }
  @Get('/get/:id')
  // @HttpCode(200)
  getId(@Param() params): Promise<any> {
    return this.animalService.test(params.id);
  }
  @Post('/create')
  create(params: AnimalEntity): Promise<any> {
    return this.animalService.create(params);
  }
}
