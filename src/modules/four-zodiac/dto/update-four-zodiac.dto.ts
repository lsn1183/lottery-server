import { PartialType } from '@nestjs/swagger'
import { CreateFourZodiacDto } from './create-four-zodiac.dto'

export class UpdateFourZodiacDto extends PartialType(CreateFourZodiacDto) {}
