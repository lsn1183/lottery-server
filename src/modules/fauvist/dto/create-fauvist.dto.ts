// 校验器
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateFauvistDto {
  readonly id: string | number

  @ApiProperty()
  @IsNotEmpty({ message: '开奖期数不为空' })
  readonly periods!: number
  readonly years?: string
  readonly beast?: string
  readonly birds?: string
  readonly propitious?: string
  readonly fierce?: string
  readonly sky?: string
  readonly land?: string
  readonly cloudy?: string
  readonly male?: string
  readonly man?: string
  readonly woman?: string

}
