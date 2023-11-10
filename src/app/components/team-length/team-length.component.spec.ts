import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLengthComponent } from './team-length.component';

describe('TeamLengthComponent', () => {
  let component: TeamLengthComponent;
  let fixture: ComponentFixture<TeamLengthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamLengthComponent]
    });
    fixture = TestBed.createComponent(TeamLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
