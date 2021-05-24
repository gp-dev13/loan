import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibiltyCalculatorComponent } from './eligibilty-calculator.component';

describe('EligibiltyCalculatorComponent', () => {
  let component: EligibiltyCalculatorComponent;
  let fixture: ComponentFixture<EligibiltyCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibiltyCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibiltyCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
