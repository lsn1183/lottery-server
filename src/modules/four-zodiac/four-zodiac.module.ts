import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FourZodiacEntity } from './entities/four-zodiac.entity'
import { FourZodiacController } from './four-zodiac.controller'
import { FourZodiacService } from './four-zodiac.service'

@Module({
  controllers: [FourZodiacController],
  providers: [FourZodiacService],
  imports: [TypeOrmModule.forFeature([FourZodiacEntity])]
})
export class FourZodiacModule {}
