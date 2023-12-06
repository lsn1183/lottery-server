import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AnimalController } from './animal.controller'
import { AnimalService } from './animal.service'
import { AnimalEntity } from './entities/animal.entity'

@Module({
  controllers: [AnimalController],
  providers: [AnimalService],
  imports: [TypeOrmModule.forFeature([AnimalEntity])]
})
export class AnimalModule {}
