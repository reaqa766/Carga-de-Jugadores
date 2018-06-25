import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSeasonComponent } from './p-season.component';

describe('PSeasonComponent', () => {
  let component: PSeasonComponent;
  let fixture: ComponentFixture<PSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
