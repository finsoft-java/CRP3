import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaVersioneComponent } from './nuova-versione.component';

describe('NuovaVersioneComponent', () => {
  let component: NuovaVersioneComponent;
  let fixture: ComponentFixture<NuovaVersioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovaVersioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovaVersioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
