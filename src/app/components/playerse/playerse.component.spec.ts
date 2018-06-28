import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerseComponent } from './playerse.component';

describe('PlayerseComponent', () => {
  let component: PlayerseComponent;
  let fixture: ComponentFixture<PlayerseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
