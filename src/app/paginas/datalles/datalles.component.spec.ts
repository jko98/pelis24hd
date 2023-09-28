import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatallesComponent } from './datalles.component';

describe('DatallesComponent', () => {
  let component: DatallesComponent;
  let fixture: ComponentFixture<DatallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatallesComponent]
    });
    fixture = TestBed.createComponent(DatallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
