import { TestBed, inject } from '@angular/core/testing';

import { ItemSelectionService } from './item-selection.service';

describe('ItemSelectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemSelectionService]
    });
  });

  it('should be created', inject([ItemSelectionService], (service: ItemSelectionService) => {
    expect(service).toBeTruthy();
  }));
});
