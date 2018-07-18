import { TestBed, inject } from '@angular/core/testing';

import { AdmineventsService } from './adminevents.service';

describe('AdmineventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmineventsService]
    });
  });

  it('should be created', inject([AdmineventsService], (service: AdmineventsService) => {
    expect(service).toBeTruthy();
  }));
});
