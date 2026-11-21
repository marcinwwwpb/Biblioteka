import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Book } from '../models/book.model';

type BookApi = Omit<Book, 'dataWydania'> & {
  dataWydania: string;
};

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly url = 'http://localhost:3000/ksiazki';
  private readonly http = inject(HttpClient);

  getBooks(): Observable<Book[]> {
    return this.http.get<BookApi[]>(this.url).pipe(
      map(books => books.map(book => this.toBook(book)))
    );
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<BookApi>(`${this.url}/${id}`).pipe(
      map(book => this.toBook(book))
    );
  }

  addBook(book: Omit<Book, 'id'>): Observable<Book> {
    return this.http.post<BookApi>(this.url, book).pipe(
      map(savedBook => this.toBook(savedBook))
    );
  }

  updateBook(
    id: number,
    changes: Partial<Omit<Book, 'id'>>
  ): Observable<Book> {
    return this.http.patch<BookApi>(
      `${this.url}/${id}`,
      changes
    ).pipe(
      map(savedBook => this.toBook(savedBook))
    );
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  private toBook(book: BookApi): Book {
    return {
      ...book,
      dataWydania: new Date(book.dataWydania)
    };
  }
}