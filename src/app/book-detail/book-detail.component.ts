import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export class Book {
  id?: number;
  title: string;
  description: string;
}
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  books: Book[] = [];
  book1 = new Book;
  book2 = new Book;
  book3 = new Book;
  book4 = new Book;
  title: string;
  description: string;


  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.inizialiteBooks(this.book1, this.book2, this.book3, this.book4);
    let id = activatedRoute.snapshot.params['id'];
    this.title = this.books[id].title;
    this.description = this.books[id].description;
   }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/']);
  }

  edit() {
    this.router.navigate(['/books/edit', ':id']);
  }

  remove() {
    this.router.navigate(['/']);
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
