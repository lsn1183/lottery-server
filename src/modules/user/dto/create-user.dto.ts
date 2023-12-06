// 用户校验器
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateUserDto {
  readonly id: number

  @ApiProperty()
  @IsNotEmpty({ message: '用户名不为空' })
  readonly name: string

  @ApiProperty()
  @IsNotEmpty({ message: '昵称不为空' })
  readonly nickname: string

  @ApiProperty()
  @IsNotEmpty({ message: '密码不为空' })
  readonly password: string

  @ApiProperty()
  @IsNotEmpty({ message: '手机号不为空' })
  readonly mobile: string

  @ApiProperty()
  readonly avatar: string

  @ApiProperty()
  readonly gender: string

  @ApiProperty()
  readonly userLevel: string

  @ApiProperty()
  readonly province: string

  @ApiProperty()
  readonly city: string
}
