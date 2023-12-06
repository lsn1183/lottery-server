import { PartialType } from '@nestjs/swagger'
import { CreateColourDto } from './create-colour.dto'
// Partial（部分声明）要创建一个所有字段与之相同但都是可选的字段，使用PartialType()并将CreateCatDto作为参数。
export class UpdateColourDto extends PartialType(CreateColourDto) {}
