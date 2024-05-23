import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaActualizarComponent } from './tarjeta-actualizar.component';

describe('TarjetaActualizarComponent', () => {
  let component: TarjetaActualizarComponent;
  let fixture: ComponentFixture<TarjetaActualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaActualizarComponent]
    });
    fixture = TestBed.createComponent(TarjetaActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
