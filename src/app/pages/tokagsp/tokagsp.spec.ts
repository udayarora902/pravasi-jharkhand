import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tokagsp } from './tokagsp';

describe('Tokagsp', () => {
  let component: Tokagsp;
  let fixture: ComponentFixture<Tokagsp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tokagsp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tokagsp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
