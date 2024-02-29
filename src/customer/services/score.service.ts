import { Injectable } from '@nestjs/common';
import { Customer } from '../domain/entities/customer.entity';
import { ScoreCalculator } from '../domain/calculators/score.calculator';
import { CreditCalculator } from '../domain/calculators/credit.calculator';
import { CustomerRepository } from '../repositories/customer.repository';

type CreateParams = {
  name: string;
  birthDate: string;
  cpf: string;
  income: number;
};

@Injectable()
export class ScoreService {
  constructor(private readonly customerReporitoy: CustomerRepository) {}

  async create({ name, birthDate, cpf, income }: CreateParams) {
    const score = ScoreCalculator.calculate();
    const credit = CreditCalculator.calculate(score);

    let customer = new Customer({
      name,
      birthDate,
      cpf,
      income,
      score,
      credit,
    });

    customer = await this.customerReporitoy.create(customer);

    return customer;
  }
}
