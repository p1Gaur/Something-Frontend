import { TestBed, inject } from '@angular/core/testing';

import { AdmincultureService } from './adminculture.service';

describe('AdmincultureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmincultureService]
    });
  });

  it('should be created', inject([AdmincultureService], (service: AdmincultureService) => {
    expect(service).toBeTruthy();
  }));
});
