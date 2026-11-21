import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ksiazki',
    pathMatch: 'full'
  },
  {
    path: 'ksiazki',
    component: BookListComponent
  },
  {
    path: '**',
    redirectTo: 'ksiazki'
  }
];