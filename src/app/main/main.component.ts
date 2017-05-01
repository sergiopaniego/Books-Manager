import { BookService } from './../services/book.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  books: Book[] = [];

  constructor(private router: Router, private service: BookService) {
    this.service.getBooks().subscribe(
        books => this.books = books,
        error => console.log(error)
      );
  }

  ngOnInit() {
  }

  goTo() {
    this.router.navigate(['/books/new']);
  }
}
