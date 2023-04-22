import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Expense } from 'src/app/interfaces/interfaces';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-edit-expense-popup',
  templateUrl: './edit-expense-popup.component.html',
  styleUrls: ['./edit-expense-popup.component.scss']
})
export class EditExpensePopupComponent implements OnInit {

  expenseForm = new FormGroup({
		date: new FormControl('', [Validators.required]),
		amount: new FormControl('', [Validators.required, Validators.min(0)]),
		category: new FormControl('', [Validators.required]),
		description: new FormControl('', [Validators.required])
  });

	constructor(
    private dialogRef: MatDialogRef<EditExpensePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Expense,
    private expenseService: ExpenseService
  ) { }

	ngOnInit(): void {

    this.expenseForm.patchValue({
			date: this.data.date,
			description: this.data.description,
			category: this.data.category,
			amount: this.data.amount
		} as any);
	}


  public onCancel(): void {
    this.dialogRef.close();
  }

	public onSubmit(): void {
    if (this.expenseForm.valid) {
      const expense = {
        ...this.data,
        ...this.expenseForm.value
      } as unknown as Expense;

      this.expenseService.update(expense).subscribe(() => {
        this.dialogRef.close();
      });
    }
  }


}


// import { Component, Inject } from '@angular/core';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-edit-expense-popup',
//   templateUrl: './edit-expense-popup.component.html',
//   styleUrls: ['./edit-expense-popup.component.scss']
// })
// export class EditExpensePopupComponent {

  // expenseForm = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   amount: new FormControl('', Validators.required),
  //   date: new FormControl('', Validators.required)
  // });

  // constructor(
  //   private dialogRef: MatDialogRef<EditExpensePopupComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: Expense,
  //   private expenseService: ExpenseService
  // ) {
  //   this.expenseForm.patchValue(data);
  // }

  // onSubmit() {
  //   if (this.expenseForm.valid) {
  //     const expense: Expense = {
  //       ...this.data,
  //       ...this.expenseForm.value
  //     };
  //     this.expenseService.update(expense).subscribe(() => {
  //       this.dialogRef.close();
  //     }, () => {
  //       // handle error
  //     });
  //   }
  // }

//   public onCancel(): void {
//     this.dialogRef.close();
//   }

// }
