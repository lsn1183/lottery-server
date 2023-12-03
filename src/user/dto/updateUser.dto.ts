import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty } from 'class-validator'

export class UpdateUserDto {
  @ApiProperty()
  @IsInt({ message: 'id应为数字' })
  @IsNotEmpty({ message: 'id不为空' })
  readonly id: number

  @ApiProperty()
  readonly name: string

  @ApiProperty()
  readonly nickname: string

  @ApiProperty()
  readonly password: string

  @ApiProperty()
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
