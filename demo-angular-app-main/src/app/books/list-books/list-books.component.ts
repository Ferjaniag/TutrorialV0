import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../model/book';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books? : Book[];
  subscription? : Subscription;

  constructor(private service : BookService){}

  deleteBook = (id : number)=>{
    this.service.deleteBook(id).subscribe(
      obj=>this.books = this.books?.filter(
        book=>book.id !== id
      ),
      error=>console.log(error),
      ()=>console.log('terminé')
    )

  }
  ngOnInit(): void {
    //this.books = this.service.getBooks();
    this.service.getBooks().subscribe(
      books => this.books = books
    );

  }


}
