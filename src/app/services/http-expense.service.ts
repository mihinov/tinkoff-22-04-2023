import { Injectable } from '@angular/core';
import { Expense, ExpenseDto } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpExpenseService {

  private apiUrl: string = 'http://localhost:5000/expenses';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.apiUrl);
  }

	public getById(id: number): Observable<Expense> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Expense>(url);
  }

  public add(expense: ExpenseDto): Observable<Expense> {
    return this.http.post<Expense>(this.apiUrl, expense);
  }

	public addAll(expenses: ExpenseDto[]): Observable<Expense[]> {
    return this.http.post<Expense[]>(this.apiUrl, expenses);
  }

  public update(expense: Expense): Observable<Expense> {
    const url = `${this.apiUrl}/${expense.id}`;
    return this.http.put<Expense>(url, expense);
  }

  public deleteById(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

	public deleteAll(): Observable<{}> {
		return this.http.delete<{}>(this.apiUrl);
	}
}
