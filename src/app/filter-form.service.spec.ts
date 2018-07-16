import { TestBed, inject } from '@angular/core/testing';

import { FilterFormService } from './filter-form.service';

describe('FilterFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterFormService]
    });
  });

  it('should be created', inject([FilterFormService], (service: FilterFormService) => {
    expect(service).toBeTruthy();
  }));
});
