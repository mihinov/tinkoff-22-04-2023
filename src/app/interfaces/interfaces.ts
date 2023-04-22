export interface Expense {
  id: number;
  description: string;
  category: string;
  amount: number;
  date: Date;
}

export interface ExpenseDto {
	description: string;
  category: string;
  amount: number;
  date: Date;
}
