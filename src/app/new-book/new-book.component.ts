import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from './../services/book.service';
import { Book } from '../models/book.model';



@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  book: Book;


  constructor(private router: Router, private service: BookService) {
  }

  ngOnInit() {
    this.book = {
      title: '',
      description: '',
    };
  }

  save() {
    this.service.addBook(this.book).subscribe(
        book => {
          this.book = book;
          this.router.navigate(['/']);
        },
        error => console.log(error)
      );
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
