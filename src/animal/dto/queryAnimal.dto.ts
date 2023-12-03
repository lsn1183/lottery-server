import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, Min } from 'class-validator'

export class QueryAnimalDto {
  @ApiProperty()
  readonly name: string

  @ApiProperty()
  @Min(1, { message: '分页不能小于1' })
  @IsInt({ message: '分页应为数字' })
  @IsNotEmpty({ message: '分页不能为空' })
  readonly pageNo: number

  @ApiProperty()
  @Min(1, { message: '分页条数不能小于1' })
  @IsInt({ message: '分页条数应为数字' })
  @IsNotEmpty({ message: '分页条数不能为空' })
  readonly pageSize: number
}
