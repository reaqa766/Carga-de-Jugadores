import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerseListComponent } from './playerse-list.component';

describe('PlayerseListComponent', () => {
  let component: PlayerseListComponent;
  let fixture: ComponentFixture<PlayerseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
