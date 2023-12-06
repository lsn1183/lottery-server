import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ZodiacEntity } from './entities/zodiac.entity';
import { ZodiacController } from './zodiac.controller';
import { ZodiacService } from './zodiac.service';

@Module({
  controllers: [ZodiacController],
  providers: [ZodiacService],
  imports: [TypeOrmModule.forFeature([ZodiacEntity])]
})
export class ZodiacModule {}
