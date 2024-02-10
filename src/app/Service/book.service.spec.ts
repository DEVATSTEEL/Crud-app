import { TestBed } from '@angular/core/testing';

import { Liblarymanagementsystem } from '../Service/crud.service';

describe('Liblarymanagementsystem', () => {
  let service: Liblarymanagementsystem;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Liblarymanagementsystem);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
