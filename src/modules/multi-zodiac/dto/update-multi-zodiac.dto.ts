import { PartialType } from '@nestjs/swagger'
import { CreateMultiZodiacDto } from './create-multi-zodiac.dto'

export class UpdateMultiZodiacDto extends PartialType(CreateMultiZodiacDto) {}
