import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { FauvistEntity } from './entities/fauvist.entity'
import { FauvistController } from './fauvist.controller'
import { FauvistService } from './fauvist.service'

@Module({
  controllers: [FauvistController],
  providers: [FauvistService],
  imports: [TypeOrmModule.forFeature([FauvistEntity])]
})
export class FauvistModule {}
