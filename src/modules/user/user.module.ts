import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EventsModule } from 'src/event/event.module'
import { UserEntity } from './entities/user.entity'
import { UserController } from './user.controller'
import { UserService } from './user.service'

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([UserEntity]), EventsModule] // websocket
})
export class UserModule {}
