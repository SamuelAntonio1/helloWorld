import { TestBed } from '@angular/core/testing';

import { CamisaService } from './camisa.service';

describe('CamisaService', () => {
  let service: CamisaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamisaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
