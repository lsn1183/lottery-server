import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { OpenEntity } from './entities/open.entity'
import { OpenController } from './open.controller'
import { OpenService } from './open.service'

@Module({
  imports: [TypeOrmModule.forFeature([OpenEntity])],
  controllers: [OpenController],
  providers: [OpenService]
})
export class OpenModule {}
