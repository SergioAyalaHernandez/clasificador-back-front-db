import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCrearComponent } from './tarjeta-crear.component';

describe('TarjetaCrearComponent', () => {
  let component: TarjetaCrearComponent;
  let fixture: ComponentFixture<TarjetaCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TarjetaCrearComponent]
    });
    fixture = TestBed.createComponent(TarjetaCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
