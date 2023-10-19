import { Controller, Get } from '@nestjs/common';
import { AnimalEntity } from './animal.entity';
import { AnimalService } from './animal.service';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get('list')
  findAll(): Promise<AnimalEntity[]> {
    return this.animalService.findAll();
  }
}
