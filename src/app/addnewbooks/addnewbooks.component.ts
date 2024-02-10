import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Liblarymanagementsystem } from '../Service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewbooks',
  templateUrl: './addnewbooks.component.html',
})
export class BookFormComponent {
onFormSubmit() {
throw new Error('Method not implemented.');
}
  Bookformcomponent: FormGroup;
  formSubmitted: boolean = false;
  highlightedText: { [key: string]: string } = {};
bookForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private tp: Liblarymanagementsystem,
    private router: Router
  ) {
    this.Bookformcomponent = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    if (this.Bookformcomponent.valid && !this.formSubmitted) {
      this.formSubmitted = true;
      const formData = this.Bookformcomponent.value;
      this.tp.addBook(formData).subscribe(
        (res) => {
          console.log('Success:', res);
          this.Bookformcomponent.reset();
          this.router.navigate(['book-list']);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
  highlightText(controlName: string, text: string) {
    this.highlightedText[controlName] = text; 
    console.log(this.highlightedText);
  }
}
