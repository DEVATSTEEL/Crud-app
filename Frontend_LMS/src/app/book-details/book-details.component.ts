import { Component, Input } from '@angular/core';
import { Book } from '../Service/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
})
export class BookDetailsComponent {
  @Input() book: Book | null = null;
}
