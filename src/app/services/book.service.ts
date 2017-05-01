import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Book } from '../models/book.model';


@Injectable()
export class BookService {

  BASE_URL = 'http://127.0.0.1:8080/books/';

  constructor(private http: Http) { }

  getBooks() {
    return this.http.get(this.BASE_URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  getBook(id: number) {
    return this.http.get(this.BASE_URL + id)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  addBook(book: Book) {
    return this.http.post(this.BASE_URL, book)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  removeBook(id: number) {
    return this.http.delete(this.BASE_URL + id)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  updateBook(book: Book) {
    return this.http.put(this.BASE_URL + book.id, book)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw('Server error (' + error.status + '): ' + error.text());
  }
}
