import { Injectable } from '@nestjs/common';
import { Customer } from '../domain/entities/customer.entity';
import { ScoreCalculator } from '../domain/calculators/score.calculator';
import { CreditCalculator } from '../domain/calculators/credit.calculator';

type CreateParams = {
  name: string;
  birthDate: string;
  cpf: string;
  income: number;
};

@Injectable()
export class ScoreService {
  create({ name, birthDate, cpf, income }: CreateParams) {
    const customer = new Customer({ name, birthDate, cpf, income });
    const score = ScoreCalculator.calculate(customer);
    const message = CreditCalculator.calculate(score);

    return { score, message };
  }
}
