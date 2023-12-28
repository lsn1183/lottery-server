import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from '../user/entities/user.entity'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { LocalStrategy } from './local.strategy'

const jwtModule = JwtModule.register({
  secret: 'lotteryService',
  signOptions: { expiresIn: '1h' }
})

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), jwtModule],
  controllers: [AuthController],
  providers: [LocalStrategy, AuthService],
  exports: [jwtModule]
})
export class AuthModule {}
