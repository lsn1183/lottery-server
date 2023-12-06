import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RecommendEntity } from './entities/recommend.entity'
import { RecommendController } from './recommend.controller'
import { RecommendService } from './recommend.service'

@Module({
  controllers: [RecommendController],
  providers: [RecommendService],
  imports: [TypeOrmModule.forFeature([RecommendEntity])]
})
export class RecommendModule {}
