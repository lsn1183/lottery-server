import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateRecommendDto } from './create-recommend.dto';

export class UpdateRecommendDto extends PartialType(CreateRecommendDto) {
  @ApiProperty()
  @IsNotEmpty({ message: 'id不为空' })
  readonly id: string
  readonly periods: number
  readonly nums1?: string
  readonly nums2?: string
  readonly nums3?: string
}
