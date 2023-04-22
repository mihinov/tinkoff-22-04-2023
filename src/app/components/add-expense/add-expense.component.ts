import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Expense, ExpenseDto } from 'src/app/interfaces/interfaces';
import { ExpenseService } from 'src/app/services/expense.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss']
})
export class AddExpenseComponent {
	public expenseForm = new FormGroup({
		date: new FormControl('', [Validators.required]),
		amount: new FormControl('', [Validators.required, Validators.min(0)]),
		category: new FormControl('', [Validators.required]),
		description: new FormControl('', [Validators.required])
	});

	constructor(
		private expenseService: ExpenseService
	) {

	}

	public onSubmit(): void {
    const expenseDto: ExpenseDto = {
      date: this.expenseForm.value.date as unknown as Date,
      amount: this.expenseForm.value.amount as unknown as number,
      category: this.expenseForm.value.category as unknown as string,
      description: this.expenseForm.value.description as unknown as string
    };

    this.expenseService.add(expenseDto)
		.pipe(
			first()
		)
		.subscribe();

    this.expenseForm.reset();
  }
}
