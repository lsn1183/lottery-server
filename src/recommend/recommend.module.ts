import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecommendController } from './recommend.controller';
import { RecommendEntity } from './recommend.entity';
import { RecommendService } from './recommend.service';

@Module({
  imports: [TypeOrmModule.forFeature([RecommendEntity])],
  providers: [RecommendService],
  controllers: [RecommendController]
})
export class RecommendModule {}
