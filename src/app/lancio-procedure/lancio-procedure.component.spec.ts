import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LancioProcedureComponent } from './lancio-procedure.component';

describe('LancioProcedureComponent', () => {
  let component: LancioProcedureComponent;
  let fixture: ComponentFixture<LancioProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LancioProcedureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LancioProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
