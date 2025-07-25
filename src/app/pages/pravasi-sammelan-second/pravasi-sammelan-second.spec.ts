import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PravasiSammelanSecond } from './pravasi-sammelan-second';

describe('PravasiSammelanSecond', () => {
  let component: PravasiSammelanSecond;
  let fixture: ComponentFixture<PravasiSammelanSecond>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PravasiSammelanSecond]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PravasiSammelanSecond);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
