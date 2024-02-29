export class CreditCalculator {
  static calculate(score: number) {
    if (score >= 1 && score <= 299) {
      return 'Reprovado';
    }

    if (score >= 300 && score <= 599) {
      return '70% de entrada, 30% do comprometimento da renda';
    }

    if (score >= 600 && score <= 799) {
      return '50% de entrada, 25% do comprometimento da renda';
    }

    if (score >= 800 && score <= 950) {
      return '30% de entrada, 20% do comprometimento da renda';
    }

    if (score >= 951 && score <= 999) {
      return '100% de financiamento, taxa zero.';
    }
  }
}
