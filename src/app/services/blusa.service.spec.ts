import { TestBed } from '@angular/core/testing';

import { BlusaService } from './blusa.service';

describe('BlusaService', () => {
  let service: BlusaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlusaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
