import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDimeComponent } from './two-dime.component';

describe('TwoDimeComponent', () => {
  let component: TwoDimeComponent;
  let fixture: ComponentFixture<TwoDimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoDimeComponent]
    });
    fixture = TestBed.createComponent(TwoDimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
