// 校验器
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateFourZodiacDto {
  readonly id: string | number

  @ApiProperty()
  @IsNotEmpty({ message: '开奖期数不为空' })
  readonly periods!: number

  readonly single?: string
  readonly double?: string

}
