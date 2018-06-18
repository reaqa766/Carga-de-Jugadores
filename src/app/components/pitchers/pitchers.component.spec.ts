import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitchersComponent } from './pitchers.component';

describe('PitchersComponent', () => {
  let component: PitchersComponent;
  let fixture: ComponentFixture<PitchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
