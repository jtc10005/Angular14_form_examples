import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuiderTypedFormComponent } from './form-buider-typed-form.component';

describe('FormBuiderTypedFormComponent', () => {
  let component: FormBuiderTypedFormComponent;
  let fixture: ComponentFixture<FormBuiderTypedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuiderTypedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBuiderTypedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
