import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  private title: string;
  private description: string;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  save() {

  }

  cancel() {
    this.router.navigate(['/']);
  }

}
