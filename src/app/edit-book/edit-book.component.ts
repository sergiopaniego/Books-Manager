import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../models/book.model';
import { BookService } from './../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

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

  save() {
    this.service.updateBook(this.book).subscribe(
        book => {
          this.book = book;
          this.router.navigate(['/books/', this.id]);
        },
        error => console.log(error)
      );
  }

  cancel() {
    this.router.navigate(['/books/', this.id]);
  }

}
