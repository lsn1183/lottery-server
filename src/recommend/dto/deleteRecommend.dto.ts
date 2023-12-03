import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
export class DeleteRecommendDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'id不为空' })
  readonly id: string
}
