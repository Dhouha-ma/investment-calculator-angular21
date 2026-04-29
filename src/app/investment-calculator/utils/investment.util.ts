import { InvestmentResult } from '../models/calculator.model';

export function calculateInvestmentResults(
  initialInvestment: number,
  annualInvestment: number,
  expectedReturn: number,
  duration: number,
): InvestmentResult[] {
  const annualData: InvestmentResult[] = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);

    investmentValue += interestEarnedInYear + annualInvestment;

    const totalInterest = investmentValue - annualInvestment * year - initialInvestment;

    annualData.push({
      year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment,
      totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  return annualData;
}
