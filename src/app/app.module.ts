import { BookService } from './services/book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NewBookComponent } from './new-book/new-book.component';
import { MainComponent } from './main/main.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MaterialModule } from '@angular/material';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBookComponent,
    MainComponent,
    BookDetailComponent,
    EditBookComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing,
    MdButtonModule,
    MdCheckboxModule,
    MaterialModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
  exports: [MdButtonModule, MdCheckboxModule]
})
export class AppModule { }
