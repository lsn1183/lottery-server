// 校验器
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateZodiacDto {
  readonly id: string

  @ApiProperty()
  @IsNotEmpty({ message: '开奖期数不为空' })
  readonly periods!: number
  readonly years?: string
  readonly single?: string
  readonly mantissa?: string
}
