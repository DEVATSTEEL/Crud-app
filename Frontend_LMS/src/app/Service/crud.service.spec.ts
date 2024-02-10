import { TestBed } from '@angular/core/testing';

import { Liblarymanagementsystem}  from './crud.service';

describe('CRUDService', () => {
  let service: Liblarymanagementsystem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Liblarymanagementsystem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
