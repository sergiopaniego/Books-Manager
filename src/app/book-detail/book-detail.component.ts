import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../models/book.model';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  id: number;


  constructor(private router: Router, activatedRoute: ActivatedRoute, private service: BookService) {
    this.id = activatedRoute.snapshot.params['id'];
    this.service.getBook(this.id).subscribe(
        book => this.book = book,
        error => console.log(error)
      );
   }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/']);
  }

  edit() {
    this.router.navigate(['/books/edit/', this.id]);
  }

  remove() {
    this.service.removeBook(this.id).subscribe(
        book => {
          this.book = book;
          this.router.navigate(['/']);
        },
        error => console.log(error)
      );
  }
}
