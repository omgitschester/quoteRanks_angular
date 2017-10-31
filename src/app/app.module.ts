import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { QuoteListComponent } from './main-page/quote-list/quote-list.component';
import { QuoteNewComponent } from './main-page/quote-new/quote-new.component';
import { QuoteSingleComponent } from './main-page/quote-single/quote-single.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    QuoteListComponent,
    QuoteNewComponent,
    QuoteSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }






