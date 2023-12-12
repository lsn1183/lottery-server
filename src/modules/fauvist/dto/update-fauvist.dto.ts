import { PartialType } from '@nestjs/swagger';
import { CreateFauvistDto } from './create-fauvist.dto';

export class UpdateFauvistDto extends PartialType(CreateFauvistDto) {}
