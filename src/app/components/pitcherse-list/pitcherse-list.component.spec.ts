import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitcherseListComponent } from './pitcherse-list.component';

describe('PitcherseListComponent', () => {
  let component: PitcherseListComponent;
  let fixture: ComponentFixture<PitcherseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitcherseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitcherseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
