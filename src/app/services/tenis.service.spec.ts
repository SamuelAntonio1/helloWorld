import { TestBed } from '@angular/core/testing';

import { TenisService } from './tenis.service';

describe('TenisService', () => {
  let service: TenisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
