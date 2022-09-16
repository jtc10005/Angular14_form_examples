import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualTypedFormComponent } from './manual-typed-form.component';

describe('ManualTypedFormComponent', () => {
  let component: ManualTypedFormComponent;
  let fixture: ComponentFixture<ManualTypedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualTypedFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualTypedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
