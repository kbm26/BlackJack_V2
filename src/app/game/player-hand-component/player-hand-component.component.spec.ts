import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHandComponentComponent } from './player-hand-component.component';

describe('PlayerHandComponentComponent', () => {
  let component: PlayerHandComponentComponent;
  let fixture: ComponentFixture<PlayerHandComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerHandComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerHandComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
