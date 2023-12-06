// 校验器
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class CreateRecommendDto {
  readonly id: string
  @ApiProperty()
  @IsNotEmpty({ message: '开奖期数不为空' })
  readonly periods!: number
  readonly nums1?: string
  readonly nums2?: string
  readonly nums3?: string
}
