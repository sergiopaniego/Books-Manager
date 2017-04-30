import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Book {
  id?: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  books: Book[] = [];
  book1 = new Book;
  book2 = new Book;
  book3 = new Book;
  book4 = new Book;

  constructor(private router: Router) {
    this.inizialiteBooks(this.book1, this.book2, this.book3, this.book4);
  }

  ngOnInit() {
  }

  goTo() {
    this.router.navigate(['/books/new']);
  }
  
  inizialiteBooks(book1: Book, book2: Book, book3: Book, book4: Book) {
    book1.id = 0;
    book2.id = 1;
    book3.id = 2;
    book4.id = 3;

    book1.title = 'El Quijote';
    book2.title = 'Watchmen';
    book3.title = 'Diary';
    book4.title = 'The portray of Dorian Gray';

    book1.description = 'El Quijote was written by Miguel de Cervantes';
    book2.description = 'One of the greatest comics of all time';
    book3.description = 'Anne Frank wrote her diary during WWII';
    book4.description = 'This title was written by Oscar Wilde';

    this.books.push(book1);
    this.books.push(book2);
    this.books.push(book3);
    this.books.push(book4);
  }
}
