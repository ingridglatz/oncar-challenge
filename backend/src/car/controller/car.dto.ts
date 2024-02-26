import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  IsArray,
} from 'class-validator';
import { Features } from '../domain/enums/features.enum';

export class CarDto {
  @IsString()
  @IsNotEmpty()
  readonly model: string;

  @IsString()
  @IsNotEmpty()
  readonly make: string;

  @IsString()
  @IsNotEmpty()
  readonly color: string;

  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @IsEnum(Features, { each: true })
  @IsArray()
  @IsNotEmpty()
  readonly features: Features[];
}
