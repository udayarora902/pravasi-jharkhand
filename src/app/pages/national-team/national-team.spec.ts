import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalTeam } from './national-team';

describe('NationalTeam', () => {
  let component: NationalTeam;
  let fixture: ComponentFixture<NationalTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NationalTeam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalTeam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
