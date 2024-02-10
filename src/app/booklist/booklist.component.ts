import { Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookFormComponent } from '../addnewbooks/addnewbooks.component';
import { Liblarymanagementsystem } from '../Service/crud.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BookListComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  books: any[] = [];
  selectedBook: any | null = null;
  filterValue: string = '';
  isDeleteButtonDangerous: boolean = true;

  constructor(
    private dialog: MatDialog,
    private libraryService: Liblarymanagementsystem
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    this.books.forEach((book, index) => {
      console.log(`Processed book ${index}: ${book.Name}`);
    });
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
    console.log(`Filtered books based on filterValue: ${this.filterValue}`);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    const addButton = document.querySelector('.add-button');
    addButton?.addEventListener('click', () => {
      console.log('Add button clicked.');
    });
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
    console.log('Selected book:', this.selectedBook);
  }

  openAddBookForm() {
    const dialogRef = this.dialog.open(BookFormComponent);
    dialogRef.afterClosed().subscribe((val) => {
      if (val) {
        this.loadBooks();
      }
    });
  }

  loadBooks(): void {
    this.filterValue = '';
    this.libraryService.getBookList().subscribe(
      (response: any) => {
        this.books = response?.LiblaryData || [];
        this.applyFilter();
      },
      (error) => {
        console.error('Error loading books:', error);
      }
    );
  }

  deleteBook(book: any): void {
    const bookId = book._id;
    this.libraryService.deleteBook(bookId).subscribe(() => {
      this.loadBooks();
      this.selectedBook = null;
      this.isDeleteButtonDangerous = true;
    });
  }

  editBook(book: any): void {
    this.selectedBook = book;
  }

  saveBook(book: any): void {
    this.selectedBook = null;
  }

  cancelEdit(): void {
    this.selectedBook = null;
  }

  applyFilter(): void {
    this.books = this.books.filter((book) => {
      return (
        book.Name.toLowerCase().includes(this.filterValue.toLowerCase()) ||
        book.Description.toLowerCase().includes(this.filterValue.toLowerCase()) ||
        book.Price.toString().includes(this.filterValue)
      );
    });
  }
}
