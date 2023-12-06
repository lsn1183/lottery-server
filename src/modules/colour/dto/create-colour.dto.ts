// 校验器
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateColourDto {
  readonly id: string | number

  @ApiProperty()
  @IsNotEmpty({ message: '开奖期数不为空' })
  readonly periods!: number
  readonly nums: string
  readonly color1: string
  readonly color2: string
  readonly main: string | number
}
