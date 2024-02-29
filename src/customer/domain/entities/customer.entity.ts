type CustomerConstructor = {
  id?: number;
  name: string;
  birthDate: string;
  cpf: string;
  income: number;
  score?: number;
  credit?: string;
};

export class Customer {
  id?: number;
  name: string;
  birthDate: string;
  cpf: string;
  income: number;
  score?: number;
  credit?: string;

  constructor(params: CustomerConstructor) {
    this.id = params.id;
    this.name = params.name;
    this.birthDate = params.birthDate;
    this.cpf = params.cpf;
    this.income = params.income;
    this.score = params.score;
    this.credit = params.credit;
  }
}
