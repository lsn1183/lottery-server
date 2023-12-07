import { ApiProperty } from '@nestjs/swagger'
// 校验器
import { IsInt, IsNotEmpty } from 'class-validator'

export class CreateOpenDto {
  @ApiProperty()
  @IsInt({ message: '开奖期数应为数字' })
  @IsNotEmpty({ message: '开奖期数不为空' }) // 期数
  periods: number

  @ApiProperty() // 特马
  particular: string
  @ApiProperty() // 属性
  particular_property: string
  @ApiProperty() // 颜色
  particular_color: string

  @ApiProperty() // 平码
  ordinary1: string
  @ApiProperty() // 属性
  ordinary1_property: string
  @ApiProperty() // 颜色
  ordinary1_color: string

  @ApiProperty()
  ordinary2: string
  @ApiProperty()
  ordinary2_property: string
  @ApiProperty() // 颜色
  ordinary2_color: string

  @ApiProperty()
  ordinary3: string
  @ApiProperty()
  ordinary3_property: string
  @ApiProperty()
  ordinary3_color: string

  @ApiProperty()
  ordinary4: string
  @ApiProperty()
  ordinary4_property: string
  @ApiProperty()
  ordinary4_color: string

  @ApiProperty()
  ordinary5: string
  @ApiProperty()
  ordinary5_property: string
  @ApiProperty()
  ordinary5_color: string

  @ApiProperty()
  ordinary6: string
  @ApiProperty()
  ordinary6_property: string
  @ApiProperty()
  ordinary6_color: string
}
