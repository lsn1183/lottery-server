import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { CreateHistoryDto } from './create-history.dto'

export class UpdateHistoryDto extends PartialType(CreateHistoryDto) {
  @ApiProperty()
  @IsNotEmpty({ message: 'id不为空' })
  readonly id: string
}
