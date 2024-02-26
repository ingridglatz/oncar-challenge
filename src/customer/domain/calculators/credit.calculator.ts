export class CreditCalculator {
  static calculate(score: number) {
    if (score >= 1 && score <= 299) {
      return { message: 'Reprovado' };
    }

    if (score >= 300 && score <= 599) {
      return { message: '70% de entrada, 30% do comprometimento da renda' };
    }

    if (score >= 600 && score <= 799) {
      return { message: '50% de entrada, 25% do comprometimento da renda' };
    }

    if (score >= 800 && score <= 950) {
      return { message: '30% de entrada, 20% do comprometimento da renda' };
    }

    if (score >= 951 && score <= 999) {
      return { message: '100% de financiamento, taxa zero.' };
    }
  }
}
