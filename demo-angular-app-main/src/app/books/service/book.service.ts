import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class BookService {
  private books : Book[] = [];
  /*private books = [
    new Book(1, 'Power of habits', 'Charles Duhigg', 20),
    new Book(2, 'Angular pour les null', 'Inconnu', 30),
    new Book(3, 'Atmic habits', 'James Clear', 25),
    new Book(4, 'Power of now', 'Eckhart Tolle', 18)
  ];*/

  //booksEdited = new Subject<Book[]>();
  baseUrl = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  /*getBooks = () : Book[]=>{
    return [...this.books];
  }*/

  getBooks = () : Observable<Book[]> =>{
    return this.http.get<Book[]>(`${this.baseUrl}/books`, );
  }



  //getLastId = () : number => this.books[this.books.length - 1].id

  /*addBook = (book : Book)=>{
    this.books = [...this.books, book];
    this.booksEdited.next(this.books);
  }*/

  addBook = (book : Object) : Observable<Book>=>{
    const options = {
      headers: new HttpHeaders(
        { 'content-type': 'application/json'}
        )
    };
    //const body = JSON.stringify(book)
    return(this.http.post<Book>(
      `${this.baseUrl}/books`,
      book,
      options));
  }





  /*getBookById = (id : number) : Book =>
  this.books.find(b=>b.id===id)!*/

  getBookById = (id : number) : Observable<Book>=> {
    return this.http.get<Book>(`${this.baseUrl}/books/${id}`)
  }


  /*editBook = (book : Book) =>{
    this.books = this.books.map(
      b=>b.id === book.id?book:b
    )
  }*/

  editBook = (book : Book) : Observable<Book>=>{
    const options = {
      headers: new HttpHeaders({ 'content-type': 'application/json'})
    };
    const body = {
      title : book.title,
      author : book.author,
      price : book.price
    }

    return(this.http.put<Book>(`${this.baseUrl}/books/${book.id}`, body, options));

  }

  /*deleteBook = (id : number)=>{
    this.books = this.books.filter(
      b=>b.id !== id
    );

    this.booksEdited.next(this.books);

    console.log(this.books);
  }*/

  deleteBook = (id : number) : Observable<Object> =>{
    return this.http.delete(`${this.baseUrl}/books/${id}`)
  }
}
