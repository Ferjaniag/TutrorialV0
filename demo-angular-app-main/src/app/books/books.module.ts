import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { ListBooksComponent } from './list-books/list-books.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookService } from './service/book.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListBooksComponent,
    AddBooksComponent,
    EditBooksComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers : [BookService]
})
export class BooksModule { }
