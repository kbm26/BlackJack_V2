import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardComponentComponent } from './scoreboard-component.component';

describe('ScoreboardComponentComponent', () => {
  let component: ScoreboardComponentComponent;
  let fixture: ComponentFixture<ScoreboardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreboardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
