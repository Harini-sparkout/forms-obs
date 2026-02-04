import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userforms } from './userforms';

describe('Userforms', () => {
  let component: Userforms;
  let fixture: ComponentFixture<Userforms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userforms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userforms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
