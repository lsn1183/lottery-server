import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
// update 继承 create 属性
export class UpdateAnimalDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'id不为空' })
  readonly id: string

  @ApiProperty()
  readonly name: string

  @ApiProperty()
  readonly nickname: string

  @ApiProperty()
  readonly password: string

  @ApiProperty()
  readonly mobile: string

  @ApiProperty()
  readonly avatar: string

  @ApiProperty()
  readonly gender: string

  @ApiProperty()
  readonly userLevel: string

  @ApiProperty()
  readonly province: string

  @ApiProperty()
  readonly city: string
}
