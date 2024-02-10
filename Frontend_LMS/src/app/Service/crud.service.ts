import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from './book.service';

@Injectable({
  providedIn: 'root',
})
export class Liblarymanagementsystem {
  baseUrl = 'http://localhost:4210/Book';

  constructor(private _http: HttpClient) {}

  addBook(data: any): Observable<any> {
    return this._http.post(this.baseUrl, data).pipe(
      catchError((error) => {
        console.error('Error in addBook:', error);
        return throwError(error);
      })
    );
  }

  updateBook(id: string, data: any): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this._http.put(url, data).pipe(
      catchError((error) => {
        console.error('Error in updateBook:', error);
        return throwError(error);
      })
    );
  }

  getBookList(): Observable<Book[]> {
    return this._http.get<Book[]>(this.baseUrl).pipe(
      catchError((error) => {
        console.error('Error in getBookList:', error);
        return throwError(error);
      })
    );
  }

  deleteBook(bookid: string): Observable<any> {
    const url = `${this.baseUrl}/${bookid}`;
    return this._http.delete(url).pipe(
      catchError((error) => {
        console.error('Error in deleteBook:', error);
        return throwError(error);
      })
    );
  }

  getBookById(bookid: string): Observable<Book | null> {
    console.log(bookid)
    const url = `${this.baseUrl}/${bookid}`;
    return this._http.get<Book>(url).pipe(
      catchError((error) => {
        console.error('Error in getBookByid:', error);
        return throwError(error);
      })
    );
  }
}
