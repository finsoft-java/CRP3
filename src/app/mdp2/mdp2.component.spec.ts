import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mdp2Component } from './mdp2.component';

describe('Mdp2Component', () => {
  let component: Mdp2Component;
  let fixture: ComponentFixture<Mdp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mdp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mdp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
