import { TestBed, inject } from '@angular/core/testing';

import { CultureSelectService } from './culture-select.service';

describe('CultureSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CultureSelectService]
    });
  });

  it('should be created', inject([CultureSelectService], (service: CultureSelectService) => {
    expect(service).toBeTruthy();
  }));
});
