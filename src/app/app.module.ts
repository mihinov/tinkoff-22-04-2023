import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutMainComponent } from './layouts/layout-main/layout-main.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { EditExpensePopupComponent } from './components/edit-expense-popup/edit-expense-popup.component';
import { ExpenseListItemComponent } from './components/expense-list-item/expense-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PageMainComponent,
    PageErrorComponent,
    HeaderComponent,
    LayoutMainComponent,
    FooterComponent,
    AddExpenseComponent,
    ExpenseListComponent,
    EditExpensePopupComponent,
    ExpenseListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatNativeDateModule,

		MatInputModule,
		MatButtonModule,
		MatDatepickerModule,
		MatDialogModule,
		MatCardModule,
		MatIconModule
  ],
	providers: [
		{ provide: MAT_DATE_LOCALE, useValue: 'ru-RU' }
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
