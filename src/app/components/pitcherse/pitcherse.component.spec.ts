import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitcherseComponent } from './pitcherse.component';

describe('PitcherseComponent', () => {
  let component: PitcherseComponent;
  let fixture: ComponentFixture<PitcherseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitcherseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitcherseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
