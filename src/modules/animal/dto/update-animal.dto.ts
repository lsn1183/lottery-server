import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
// update 继承 create 属性
export class UpdateAnimalDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'id不为空' })
  readonly id: string

  @ApiProperty()
  readonly nums: string

  @ApiProperty()
  readonly color: string

  @ApiProperty()
  readonly name: string

  @ApiProperty()
  readonly property: string


  @ApiProperty()
  readonly profession: string

  @ApiProperty()
  readonly type: string

  @ApiProperty()
  readonly year: string
}
