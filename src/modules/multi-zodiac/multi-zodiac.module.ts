import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MultiZodiacEntity } from './entities/multi-zodiac.entity'
import { MultiZodiacController } from './multi-zodiac.controller'
import { MultiZodiacService } from './multi-zodiac.service'

@Module({
  controllers: [MultiZodiacController],
  providers: [MultiZodiacService],
  imports: [TypeOrmModule.forFeature([MultiZodiacEntity])]
})
export class MultiZodiacModule {}
