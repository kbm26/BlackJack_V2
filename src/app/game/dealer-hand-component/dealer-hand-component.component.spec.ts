import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerHandComponentComponent } from './dealer-hand-component.component';

describe('DealerHandComponentComponent', () => {
  let component: DealerHandComponentComponent;
  let fixture: ComponentFixture<DealerHandComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealerHandComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealerHandComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
