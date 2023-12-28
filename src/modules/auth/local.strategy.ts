// 验证信息策略文件
import { BadRequestException, Logger } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { InjectRepository } from '@nestjs/typeorm'
import { compareSync } from 'bcrypt'
import type { IStrategyOptions } from 'passport-local'
import { Strategy } from 'passport-local'
import { UserEntity } from 'src/modules/user/entities/user.entity'
import { Repository } from 'typeorm'

export class LocalStrategy extends PassportStrategy(Strategy) { // 这里的 Strategy 必须是 passport-jwt 包中的
  // 此处的 Strategy 要引入 passport-local 中的
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity> // 将 UserEntity 实体注入进来
  ) {
    super({
      usernameField: 'name', // 固定写法，指定用户名字段，可以为 phone 或 email 等其他字段，不影响
      passwordField: 'password' // 固定写法，指定密码字段
    } as IStrategyOptions)
  }

  async validate(name: string, password: string): Promise<any> {
    // 必须实现一个 validate 方法
    const user = await this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.name=:name', { name })
      .getOne()

    if (!user) throw new BadRequestException('用户不存在')
    Logger.log('参数', password, user.password, compareSync(password, user.password))
    if (!compareSync(password, user.password)) throw new BadRequestException('密码错误')
    return user
  }
}
