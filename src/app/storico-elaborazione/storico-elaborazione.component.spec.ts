import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoricoElaborazioneComponent } from './storico-elaborazione.component';

describe('StoricoElaborazioneComponent', () => {
  let component: StoricoElaborazioneComponent;
  let fixture: ComponentFixture<StoricoElaborazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoricoElaborazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoricoElaborazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
