import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificadorComponent } from './clasificador.component';

describe('ClasificadorComponent', () => {
  let component: ClasificadorComponent;
  let fixture: ComponentFixture<ClasificadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasificadorComponent]
    });
    fixture = TestBed.createComponent(ClasificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
