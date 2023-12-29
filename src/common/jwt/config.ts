import { JwtModule } from '@nestjs/jwt'

export const jwtConfig = {
  global: true,
  secret: 'lotteryService',
  signOptions: { expiresIn: '4h' }
}

export const jwtModule = JwtModule.register(jwtConfig)
