import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterSingoliComponent } from './cluster-singoli.component';

describe('ClusterSingoliComponent', () => {
  let component: ClusterSingoliComponent;
  let fixture: ComponentFixture<ClusterSingoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClusterSingoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterSingoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
