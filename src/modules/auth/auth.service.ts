import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserEntity } from '../user/entities/user.entity'

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: Partial<UserEntity>) {
    const payload = { name: user.name, id: user.id }
    // Logger.log('参数:', payload, user)
    const access_token = this.jwtService.sign(payload) // 签发 JWT token
    return {
      access_token,
      type: 'Bearer'
    }
  }
}
