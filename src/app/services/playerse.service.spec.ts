import { TestBed, inject } from '@angular/core/testing';

import { PlayerseService } from './playerse.service';

describe('PlayerseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerseService]
    });
  });

  it('should be created', inject([PlayerseService], (service: PlayerseService) => {
    expect(service).toBeTruthy();
  }));
});
