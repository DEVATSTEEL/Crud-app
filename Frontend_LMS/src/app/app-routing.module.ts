import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookFormComponent } from './addnewbooks/addnewbooks.component';
import { BookListComponent } from './booklist/booklist.component';
import { BookDetailComponent } from './book-detail/book-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component:BookFormComponent },
  { path: 'add-book', component:BookFormComponent  },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: 'books', component: BookListComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
