import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubicFtCalComponent } from './cubic-ft-cal.component';

describe('CubicFtCalComponent', () => {
  let component: CubicFtCalComponent;
  let fixture: ComponentFixture<CubicFtCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubicFtCalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CubicFtCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
