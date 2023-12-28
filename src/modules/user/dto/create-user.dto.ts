// 用户校验器
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
  readonly id: string

  @ApiProperty()
  @IsNotEmpty({ message: '用户名不为空' })
  readonly name: string

  @ApiProperty()
  @IsNotEmpty({ message: '密码不为空' })
  readonly password: string
}
