import { TestBed, inject } from '@angular/core/testing';

import { PitcherseService } from './pitcherse.service';

describe('PitcherseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PitcherseService]
    });
  });

  it('should be created', inject([PitcherseService], (service: PitcherseService) => {
    expect(service).toBeTruthy();
  }));
});
