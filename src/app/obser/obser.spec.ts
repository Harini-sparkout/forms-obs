import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obser } from './obser';

describe('Obser', () => {
  let component: Obser;
  let fixture: ComponentFixture<Obser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
