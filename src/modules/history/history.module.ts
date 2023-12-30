import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { HistoryEntity } from './entities/history.entity'
import { HistoryController } from './history.controller'
import { HistoryService } from './history.service'

@Module({
  imports: [TypeOrmModule.forFeature([HistoryEntity])],
  controllers: [HistoryController],
  providers: [HistoryService]
})
export class HistoryModule {}
