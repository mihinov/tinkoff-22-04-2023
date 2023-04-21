import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutMainComponent } from './layouts/layout-main/layout-main.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { PageMainComponent } from './pages/page-main/page-main.component';

const routes: Routes = [
	{ path: '', component: LayoutMainComponent, children: [
		{ path: '', component: PageMainComponent, pathMatch: 'full' },
		{ path: 'error', component: PageErrorComponent },
		{ path: '**', redirectTo: 'error' },
	] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
