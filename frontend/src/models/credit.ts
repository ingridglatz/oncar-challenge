export class Credit {
  id?: number;
  name: string;
  birthDate: string;
  cpf: string;
  income: number;
  score: number;
  credit: string;

  constructor(params: Credit) {
    this.id = params.id;
    this.name = params.name;
    this.birthDate = params.birthDate;
    this.cpf = params.cpf;
    this.income = params.income;
    this.score = params.score;
    this.credit = params.credit;
  }
}
