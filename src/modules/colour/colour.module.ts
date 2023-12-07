import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ColourController } from './colour.controller'
import { ColourService } from './colour.service'
import { ColourEntity } from './entities/colour.entity'

@Module({
  controllers: [ColourController],
  providers: [ColourService],
  imports: [TypeOrmModule.forFeature([ColourEntity])]
})
export class ColourModule {}
