import { ApiProperty, PartialType } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { CreateOpenDto } from './create-open.dto'

export class UpdateOpenDto extends PartialType(CreateOpenDto) {
  @ApiProperty()
  @IsNotEmpty({ message: 'id不为空' })
  readonly id: string

  // @ApiProperty()
  // @IsInt({ message: '期数应为数字' })
  // @IsNotEmpty({ message: '期数不为空' }) // 期数
  // periods: number

  // @ApiProperty() // 特马
  // particular: string
  // @ApiProperty() // 属性
  // particular_property: string
  // @ApiProperty() // 颜色
  // particular_color: string

  // @ApiProperty() // 平码
  // ordinary1: string
  // @ApiProperty() // 属性
  // ordinary1_property: string
  // @ApiProperty() // 颜色
  // ordinary1_color: string

  // @ApiProperty()
  // ordinary2_property: string
  // @ApiProperty()
  // ordinary2: string
  // @ApiProperty() // 颜色
  // ordinary2_color: string

  // @ApiProperty()
  // ordinary3: string
  // @ApiProperty()
  // ordinary3_property: string
  // @ApiProperty()
  // ordinary3_color: string

  // @ApiProperty()
  // ordinary4: string
  // @ApiProperty()
  // ordinary4_property: string
  // @ApiProperty()
  // ordinary4_color: string

  // @ApiProperty()
  // ordinary5: string
  // @ApiProperty()
  // ordinary5_property: string
  // @ApiProperty()
  // ordinary5_color: string

  // @ApiProperty()
  // ordinary6: string
  // @ApiProperty()
  // ordinary6_property: string
  // @ApiProperty()
  // ordinary6_color: string
}
