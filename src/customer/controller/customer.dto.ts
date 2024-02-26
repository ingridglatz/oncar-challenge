import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CustomerDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly birthDate: string;

  @IsString()
  @IsNotEmpty()
  readonly cpf: string;

  @IsNumber()
  @IsNotEmpty()
  readonly income: number;
}
