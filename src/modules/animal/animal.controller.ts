import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { AnimalService } from './animal.service'
import { CreateAnimalDto } from './dto/create-animal.dto'
import { AnimalEntity } from './entities/animal.entity'

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Get('list')
  findAll(): Promise<AnimalEntity[]> {
    return this.animalService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalService.findOne(id)
  }

  @Post('create')
  create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animalService.create(createAnimalDto)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimalDto: any) {
    return this.animalService.update(id, updateAnimalDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalService.remove(id)
  }
}
