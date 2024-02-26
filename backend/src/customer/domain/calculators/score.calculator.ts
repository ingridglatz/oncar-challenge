import { Customer } from '../entities/customer.entity';

export class ScoreCalculator {
  static calculate(customer: Customer) {
    const score = Math.floor(Math.random() * 999);
    return score;
  }
}
