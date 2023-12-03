import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class UpdateRecommendDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'id不为空' })
  readonly id: string
  readonly periods: number
  readonly nums1?: string
  readonly nums2?: string
  readonly nums3?: string
}
