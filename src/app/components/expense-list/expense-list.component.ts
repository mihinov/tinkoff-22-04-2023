import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/interfaces/interfaces';
import { ExpenseService } from 'src/app/services/expense.service';
import { Observable, first, tap } from 'rxjs';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'app-expense-list',
	templateUrl: './expense-list.component.html',
	styleUrls: ['./expense-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
			]),
			transition(':leave',
        animate('500ms', style({ opacity: 0 }))
      )
    ])
	]
})
export class ExpenseListComponent implements OnInit {

	public expenses$: Observable<Expense[]> = this.expenseService.expenses$;

	constructor(
		private expenseService: ExpenseService,
	) {}

	ngOnInit(): void {

	}
}
