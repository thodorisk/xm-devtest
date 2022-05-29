import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/shared/modules/material.module';

import { RegistrationFormFieldComponent } from './registration-form-field.component';

describe('RegistrationFormFieldComponent', () => {
  let component: RegistrationFormFieldComponent;
  let fixture: ComponentFixture<RegistrationFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
      declarations: [RegistrationFormFieldComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormFieldComponent);
    component = fixture.componentInstance;
    component.formField = {
      type: 'text',
      name: 'mock_name',
      label: '',
      required: false,
      validations: []
    }

    const formBuilder = TestBed.inject(FormBuilder);
    component.form = formBuilder.group({
      mock_name: new FormControl('', [Validators.required, Validators.email]),
    });

    fixture.detectChanges();
  });

  it('should create RegistrationFormFieldComponent', () => {
    expect(component).toBeTruthy();
  });
});
