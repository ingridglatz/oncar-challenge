import { Body, Controller, Post } from '@nestjs/common';
import { ScoreService } from '../services';
import { CustomerDto } from './customer.dto';

@Controller('/score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Post()
  create(@Body() body: CustomerDto) {
    const { name, cpf, income, birthDate } = body;
    const score = this.scoreService.create({ name, birthDate, cpf, income });
    return score;
  }
}
