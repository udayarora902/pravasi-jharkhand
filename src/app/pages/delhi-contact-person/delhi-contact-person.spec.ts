import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiContactPerson } from './delhi-contact-person';

describe('DelhiContactPerson', () => {
  let component: DelhiContactPerson;
  let fixture: ComponentFixture<DelhiContactPerson>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelhiContactPerson]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelhiContactPerson);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
