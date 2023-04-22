import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Expense } from '../interfaces/interfaces';
import { HttpExpensesService } from './http-expenses.service';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

	private _behSubjExpenses = new BehaviorSubject([] as Expense[]);

  constructor(
		private httpExpensesService: HttpExpensesService
	) { }

	public getExpenses(): Observable<Expense[]> {
		return this.httpExpensesService.getAll();
	}
}
