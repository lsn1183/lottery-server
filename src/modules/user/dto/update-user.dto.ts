import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty } from 'class-validator'

export class UpdateUserDto {
  @ApiProperty()
  @IsInt({ message: 'id应为数字' })
  @IsNotEmpty({ message: 'id不为空' })
  readonly id: string

  @ApiProperty()
  readonly name: string

  @ApiProperty()
  readonly password: string
}
