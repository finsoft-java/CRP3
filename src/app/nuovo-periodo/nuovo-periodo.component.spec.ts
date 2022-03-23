import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoPeriodoComponent } from './nuovo-periodo.component';

describe('NuovoPeriodoComponent', () => {
  let component: NuovoPeriodoComponent;
  let fixture: ComponentFixture<NuovoPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovoPeriodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovoPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
