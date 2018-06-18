import { TestBed, inject } from '@angular/core/testing';

import { PitcherService } from './pitcher.service';

describe('PitcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PitcherService]
    });
  });

  it('should be created', inject([PitcherService], (service: PitcherService) => {
    expect(service).toBeTruthy();
  }));
});
