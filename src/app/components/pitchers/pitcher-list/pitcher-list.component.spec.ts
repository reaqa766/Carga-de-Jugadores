import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PitcherListComponent } from './pitcher-list.component';

describe('PitcherListComponent', () => {
  let component: PitcherListComponent;
  let fixture: ComponentFixture<PitcherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PitcherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PitcherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
