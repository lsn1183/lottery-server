import { ApiProperty } from '@nestjs/swagger'
// 校验器
import { IsNotEmpty } from 'class-validator'

export class AddAnimalDto {
  // ToDo: Remove this user interface
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
