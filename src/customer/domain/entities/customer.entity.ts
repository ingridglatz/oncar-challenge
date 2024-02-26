type CustomerConstructor = {
  id?: string;
  name: string;
  birthDate: string;
  cpf: string;
  income: number;
};

export class Customer {
  id?: string;
  name: string;
  birthDate: string;
  cpf: string;
  income: number;

  constructor({ id, name, birthDate, cpf, income }: CustomerConstructor) {
    this.id = id;
    this.name = name;
    this.birthDate = birthDate;
    this.cpf = cpf;
    this.income = income;
  }
}
