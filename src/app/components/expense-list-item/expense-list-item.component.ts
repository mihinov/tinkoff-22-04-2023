import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Expense } from 'src/app/interfaces/interfaces';
import { ExpenseService } from 'src/app/services/expense.service';
import { MatDialog } from '@angular/material/dialog';
import { EditExpensePopupComponent } from '../edit-expense-popup/edit-expense-popup.component';import { Observable, first } from 'rxjs';

@Component({
  selector: 'app-expense-list-item',
  templateUrl: './expense-list-item.component.html',
  styleUrls: ['./expense-list-item.component.scss']
})
export class ExpenseListItemComponent {
	@Input() expense!: Expense;

	constructor(
		private expenseService: ExpenseService,
		private dialog: MatDialog
	) {}

	public deleteExpense() {
		this.expenseService.deleteById(this.expense.id).subscribe();
	}

	public openEditExpensePopup() {
		const dialogRef = this.dialog.open(EditExpensePopupComponent, {
			width: '400px',
			data: this.expense,
			enterAnimationDuration: '300ms',
			exitAnimationDuration: '300ms'
		});

		// dialogRef.afterClosed()
		// .pipe(
		// 	first()
		// )
		// .subscribe((result) => {
		// 	if (result) {
		// 		this.expenseService.update(result).subscribe();
		// 	}
		// });
	}
}
