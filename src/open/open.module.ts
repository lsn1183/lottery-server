import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpenController } from './open.controller';
import { OpenEntity } from './open.entity';
import { OpenService } from './open.service';


@Module({
  imports: [TypeOrmModule.forFeature([OpenEntity])],
  providers: [OpenService],
  controllers: [OpenController],
})
export class OpenModule {}
