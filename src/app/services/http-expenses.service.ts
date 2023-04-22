import { Injectable } from '@angular/core';
import { Expense } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpExpensesService {

  private apiUrl: string = 'http://localhost:5000/expenses';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.apiUrl);
  }

	public getById(id: number): Observable<Expense> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Expense>(url);
  }

  public add(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.apiUrl, expense);
  }

	public addAll(expenses: Expense[]): Observable<Expense[]> {
    return this.http.post<Expense[]>(this.apiUrl, expenses);
  }

  public update(expense: Expense): Observable<Expense> {
    const url = `${this.apiUrl}/${expense.id}`;
    return this.http.put<Expense>(url, expense);
  }

  public delete(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
