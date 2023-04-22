import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap, of } from 'rxjs';
import { Expense, ExpenseDto } from '../interfaces/interfaces';
import { HttpExpenseService } from './http-expense.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

	private _behSubjExpenses = new BehaviorSubject([] as Expense[]);
	public expenses$: Observable<Expense[]> = this._behSubjExpenses

  constructor(
		private httpExpenseService: HttpExpenseService
	) {
		this.getAll().subscribe();
	}

	public getAll(): Observable<Expense[]> {
		return this.httpExpenseService.getAll().pipe(
      tap((expenses) => {
        this._behSubjExpenses.next(expenses);
      })
    );
	}

	public add(expense: ExpenseDto): Observable<Expense> {
		return this.httpExpenseService.add(expense).pipe(
      tap(expense => {
				const expenses = this._behSubjExpenses.getValue();

				expenses.push(expense);
				this._behSubjExpenses.next(expenses);
				return
			})
    );
	}

	public addAll(expenses: ExpenseDto[]): Observable<Expense[]> {
		return this.httpExpenseService.addAll(expenses).pipe(
      switchMap(() => this.getAll())
    );
	}

	public update(expense: Expense): Observable<Expense> {
		return this.httpExpenseService.update(expense).pipe(
			switchMap(() => this.getAll()),
			switchMap((expenses) => {
				const index = expenses.findIndex((e) => e.id === expense.id);
        return of(expenses[index]);
			})
    );
	}

	public deleteById(id: number): Observable<{}> {
    return this.httpExpenseService.deleteById(id).pipe(
			switchMap(() => this.getAll()),
			switchMap(() => of({}))
    );
  }

	public deleteAll(): Observable<{}> {
    return this.httpExpenseService.deleteAll().pipe(
      tap(() => {
        this._behSubjExpenses.next([]);
      })
    );
  }

}
