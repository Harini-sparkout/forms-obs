import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Behaviour } from './behaviour';

describe('Behaviour', () => {
  let component: Behaviour;
  let fixture: ComponentFixture<Behaviour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Behaviour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Behaviour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
