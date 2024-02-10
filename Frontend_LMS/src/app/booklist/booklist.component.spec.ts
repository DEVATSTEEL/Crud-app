import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './booklist.component';

describe('BooklistComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent]
    });
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
