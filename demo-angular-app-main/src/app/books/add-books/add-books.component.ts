import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent {

  constructor(
    private service : BookService,
    private router : Router
    ){}


  addBook = (f : NgForm)=>{
    //console.log(f);
    const newBook = {
      title : f.value.titre,
      author : f.value.auteur,
      price : f.value.prix
     }
    this.service.addBook(newBook).subscribe(
      book => this.router.navigate(['/books'])
    );


  }

}
