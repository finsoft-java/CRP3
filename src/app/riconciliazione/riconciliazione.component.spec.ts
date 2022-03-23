import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiconciliazioneComponent } from './riconciliazione.component';

describe('RiconciliazioneComponent', () => {
  let component: RiconciliazioneComponent;
  let fixture: ComponentFixture<RiconciliazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiconciliazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiconciliazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
