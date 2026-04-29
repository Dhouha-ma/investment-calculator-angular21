import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationResult } from './calculation-result';

describe('CalculationResult', () => {
  let component: CalculationResult;
  let fixture: ComponentFixture<CalculationResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculationResult]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculationResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
