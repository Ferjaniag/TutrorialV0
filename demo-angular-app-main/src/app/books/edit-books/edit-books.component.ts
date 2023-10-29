import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../model/book';
import { BookService } from '../service/book.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {

  constructor(
    private activatedRoute : ActivatedRoute,
    private service : BookService,
    private formBuilder : FormBuilder,
    private router : Router){}

  book? : Book;
  //Reactive Form
  editForm = this.formBuilder.group({
    title : '',
    author : '',
    price : ''
  });
  /*editForm = new FormGroup({
    title : new FormControl(''),
    author : new FormControl(''),
    price : new FormControl('')
  })*/



  editBook = ()=>{
    //console.log(this.editForm);
    const values = this.editForm.value;
    this.service.editBook(
      new Book(this.book!.id, values.title!, values.author!, +values.price!)
    ).subscribe(
      book => this.router.navigate(['/books'])
    );
  }



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params=>{
        //this.book = this.service.getBookById(+params['id']);
        this.service.getBookById(+params['id']).subscribe(
          book=> {
            this.book = book;

            //console.log(this.book);
            this.editForm.setValue({
              title : this.book.title,
              author : this.book.author,
              price : this.book.price + ''
            })
          }
        )
      }
    )

  }

}
