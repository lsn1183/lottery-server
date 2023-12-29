// /src/global/strategy/jwt.strategy.ts

import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { InjectRepository } from '@nestjs/typeorm'
// import type { StrategyOptions } from 'passport-jwt'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { jwtConfig } from 'src/common/jwt/config'
import { Repository } from 'typeorm'
import { UserEntity } from '../../modules/user/entities/user.entity'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  // 这里的 Strategy 必须是 passport-jwt 包中的
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConfig.secret // secretOrKey需要和签发时的secret一致。
    })
    // as StrategyOptions)
  }

  async validate(payload: UserEntity) {
    const existUser = await this.userRepository.findOne({
      where: { id: payload.id }
    })

    if (!existUser) throw new UnauthorizedException('token验证失败')

    return existUser
  }
}
