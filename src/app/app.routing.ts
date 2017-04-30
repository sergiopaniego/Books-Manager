import { EditBookComponent } from './edit-book/edit-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MainComponent } from './main/main.component';
import { NewBookComponent } from './new-book/new-book.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes = [
  { path: 'books/new', component: NewBookComponent,  },
  { path: 'books/:id', component: BookDetailComponent,  },
  { path: 'books/edit/:id', component: EditBookComponent,  },
  { path: '', component: MainComponent, pathMatch: 'full' }
];
export const routing = RouterModule.forRoot(appRoutes);

