import { NewBookComponent } from './new-book/new-book.component';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private items = [];
  private newitem: string;

  constructor(private http: Http,  private router: Router) {

   }

  goTo() {
    this.router.navigate(['/books/new']);
  }
}
