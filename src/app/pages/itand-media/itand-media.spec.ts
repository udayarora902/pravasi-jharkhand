import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITandMedia } from './itand-media';

describe('ITandMedia', () => {
  let component: ITandMedia;
  let fixture: ComponentFixture<ITandMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ITandMedia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ITandMedia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
