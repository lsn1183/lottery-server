// 校验器
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateMultiZodiacDto {
  readonly id: string | number

  @ApiProperty()
  @IsNotEmpty({ message: '开奖期数不为空' })
  readonly periods!: number
  readonly main?: string
  readonly years?: string
  readonly single?: string
  readonly double?: string
  readonly four?: string
  readonly five?: string
  readonly six?: string
  readonly eight?: string
  readonly nine?: string
  readonly ten?: string
}
