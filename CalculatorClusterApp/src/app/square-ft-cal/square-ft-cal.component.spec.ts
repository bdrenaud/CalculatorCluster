import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareFtCalComponent } from './square-ft-cal.component';

describe('SquareFtCalComponent', () => {
  let component: SquareFtCalComponent;
  let fixture: ComponentFixture<SquareFtCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquareFtCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareFtCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
