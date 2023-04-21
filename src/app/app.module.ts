import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageMainComponent } from './pages/page-main/page-main.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutMainComponent } from './layouts/layout-main/layout-main.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageMainComponent,
    PageErrorComponent,
    HeaderComponent,
    LayoutMainComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
