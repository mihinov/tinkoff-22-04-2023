import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { Expense, ExpenseDto } from '../interfaces/interfaces';
import { HttpExpenseService } from './http-expense.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

	private _behSubjExpenses = new BehaviorSubject([] as Expense[]);
	public expenses$: Observable<Expense[]> = this._behSubjExpenses.asObservable();

  constructor(
		private httpExpenseService: HttpExpenseService
	) { }

	public getAll(): Observable<Expense[]> {
		return this.httpExpenseService.getAll().pipe(
      tap((expenses) => {
        this._behSubjExpenses.next(expenses);
      })
    );
	}

	public add(expense: ExpenseDto): Observable<Expense> {
		return this.httpExpenseService.add(expense).pipe(
      tap((newExpense) => {
        const expenses = this._behSubjExpenses.getValue();
        expenses.push(newExpense);
        this._behSubjExpenses.next(expenses);
      })
    );
	}

	public addAll(expenses: ExpenseDto[]): Observable<Expense[]> {
		return this.httpExpenseService.addAll(expenses).pipe(
      tap((newExpenses) => {
        const currentExpenses = this._behSubjExpenses.getValue();
        const updatedExpenses = [...currentExpenses, ...newExpenses];
        this._behSubjExpenses.next(updatedExpenses);
      })
    );
	}

	public update(expense: Expense): Observable<Expense> {
		return this.httpExpenseService.update(expense).pipe(
      tap((updatedExpense) => {
        const expenses = this._behSubjExpenses.getValue();
        const index = expenses.findIndex((e) => e.id === updatedExpense.id);
        expenses[index] = updatedExpense;
        this._behSubjExpenses.next(expenses);
      })
    );
	}

	public deleteById(id: number): Observable<{}> {
    return this.httpExpenseService.deleteById(id).pipe(
      tap(() => {
        const expenses = this._behSubjExpenses.getValue().filter((e) => e.id !== id);
        this._behSubjExpenses.next(expenses);
      })
    );
  }

	public deleteAllExpenses(): Observable<{}> {
    return this.httpExpenseService.deleteAll().pipe(
      tap(() => {
        this._behSubjExpenses.next([]);
      })
    );
  }

}
