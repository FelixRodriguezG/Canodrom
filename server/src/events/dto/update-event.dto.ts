import { PartialType } from '@nestjs/mapped-types';
import { CreateEventsDto } from './create-event.dto';

export class UpdateEventDto extends PartialType(CreateEventsDto) {}
