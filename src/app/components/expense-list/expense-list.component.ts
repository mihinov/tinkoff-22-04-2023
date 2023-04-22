import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/interfaces/interfaces';
import { ExpenseService } from 'src/app/services/expense.service';
import { Observable, first } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
	selector: 'app-expense-list',
	templateUrl: './expense-list.component.html',
	styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {

	public expenses$: Observable<Expense[]> = this.expenseService.getAll();

	constructor(
		private expenseService: ExpenseService,
	) {}

	ngOnInit(): void {

	}

	public trackByFn(index: any, item: any) {
		return item.id; // unique id corresponding to the item
	}
}
