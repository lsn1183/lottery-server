import { ApiProperty } from '@nestjs/swagger'
// 校验器

export class CreateAnimalDto {
  @ApiProperty()
  readonly nums: string

  @ApiProperty()
  readonly color: string

  @ApiProperty()
  readonly name: string

  @ApiProperty()
  readonly property: string

  @ApiProperty()
  readonly general: string

  @ApiProperty()
  readonly profession: string

  @ApiProperty()
  readonly type: string
}
