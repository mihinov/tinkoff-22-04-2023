import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/interfaces/interfaces';
import { ExpenseService } from 'src/app/services/expense.service';
import { Observable, first, tap } from 'rxjs';

@Component({
	selector: 'app-expense-list',
	templateUrl: './expense-list.component.html',
	styleUrls: ['./expense-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpenseListComponent implements OnInit {

	public expenses$: Observable<Expense[]> = this.expenseService.expenses$;

	constructor(
		private expenseService: ExpenseService,
	) {}

	ngOnInit(): void {

	}
}
