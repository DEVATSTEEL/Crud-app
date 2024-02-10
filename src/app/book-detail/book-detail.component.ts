import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Liblarymanagementsystem } from '../Service/crud.service';
import { Book } from '../Service/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
})
export class BookDetailComponent implements OnInit {
  bookForm: FormGroup;
  isEditing: boolean = false;
  data: Book | null = null;
  bookId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private bookservice: Liblarymanagementsystem,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.bookForm = this.fb.group({
      Name: ['', Validators.required],
      Description: [''],
      Price: [0, Validators.min(0)],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.bookId = params.get('id');
      if (this.bookId) {
        this.loadBookData();
      }
    });
  }

  loadBookData() {
    if (this.bookId) {
      this.bookservice.getBookById(this.bookId).subscribe((book: Book | null) => {
        if (book) {
          this.data = book;
          this.isEditing = true;

          this.bookForm.setValue({
            Name: book.name,
            Description: book.description,
            Price: book.price,
          });
        }
      });
    }
  }

  onFormSubmit() {
    if (this.bookForm.valid) {
      const formData = this.bookForm.value;

      if (this.isEditing && this.bookId) {
        this.bookservice.updateBook(this.bookId, formData).subscribe({
          next: (val: any) => {
            console.log('Book updated:', val);
            this.router.navigate(['/books']);
          },
          error: (err: any) => {
            console.error('Error updating book:', err);
          },
        });
      } else {
        this.bookservice.addBook(formData).subscribe({
          next: (val: any) => {
            console.log('Book created:', val);
            this.router.navigate(['book-list']);
          },
          error: (err: any) => {
            console.error('Error creating book:', err);
          },
        });
      }
    }
  }
}
