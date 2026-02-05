import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formevent } from './formevent';

describe('Formevent', () => {
  let component: Formevent;
  let fixture: ComponentFixture<Formevent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formevent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formevent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
