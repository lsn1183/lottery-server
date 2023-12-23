// 校验器
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateFauvistDto {
  readonly id: string | number

  @ApiProperty()
  @IsNotEmpty({ message: '开奖期数不为空' })
  readonly periods!: number

  readonly beast?: string
  readonly birds?: string
  readonly propitious?: string
  readonly fierce?: string
}
