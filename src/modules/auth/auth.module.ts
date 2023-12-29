import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { jwtModule } from 'src/common/jwt/config'
import { JwtStrategy } from 'src/common/jwt/jwt.strategy'
import { UserEntity } from '../user/entities/user.entity'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { LocalStrategy } from './local.strategy'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), jwtModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  // exports: [jwtModule]
  exports: []
})
export class AuthModule {}
