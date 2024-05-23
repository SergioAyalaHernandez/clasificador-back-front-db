import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficacionComponent } from './graficacion.component';

describe('GraficacionComponent', () => {
  let component: GraficacionComponent;
  let fixture: ComponentFixture<GraficacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficacionComponent]
    });
    fixture = TestBed.createComponent(GraficacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
