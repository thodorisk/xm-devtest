import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { RegistrationApiService } from '../../../../api/registration/services/registration-api.service';
import { of } from 'rxjs';
import { RegistrationFieldSrvDTO, RegistrationRequest } from 'src/app/api/registration/interfaces/registration-api.interface';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/shared/modules/material.module';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  let fakeRegistrationApiService: RegistrationApiService;

  beforeEach(async () => {
    fakeRegistrationApiService = jasmine.createSpyObj<RegistrationApiService>(
      'RegistrationApiService',
      {
        getRegistrationFormControls: of(mockRegistrationFields),
        register: of(mockRegistrationRequest),
      }
    );

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      declarations: [RegistrationComponent],
      providers: [
        FormBuilder,
        { provide: RegistrationApiService, useValue: fakeRegistrationApiService }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('calls getRegistrationFormControls when component is created', () => {
    expect(fakeRegistrationApiService.getRegistrationFormControls).toHaveBeenCalledTimes(1);
  });

  it('calls getRegistrationFormControls when component is created', () => {
    component.submitForm();
    expect(fakeRegistrationApiService.register).toHaveBeenCalledTimes(1);
  });

  // if i had time i would test each field based on the validation rules. One by one and checking also the form validity as a whole.
  xit('should check validity of form', () => {
    component.registrationForm.setValue({
      "first_name": "",
      "middle_name": "",
      "last_name": "",
      "email": "",
      "phone": "",
      "password": "",
    });

    expect(component.registrationForm.valid).toEqual(false);
  })
});

const mockRegistrationFields: RegistrationFieldSrvDTO[] = [
  {
    type: 'text',
    name: 'first_name',
    label: 'First Name',
    required: true,
    validations: [
      {
        name: 'regex',
        message: 'Only English characters are allowed.',
        value: '^[a-zA-Z0-9]*$',
      },
      {
        name: 'maxlength',
        message: 'Must be less than 64 characters.',
        value: 63,
      },
    ],
  },
  {
    type: 'text',
    name: 'middle_name',
    label: 'Middle Name',
    required: false,
    validations: [
      {
        name: 'regex',
        message: 'Only English characters are allowed.',
        value: '^[a-zA-Z0-9]*$',
      },
      {
        name: 'maxlength',
        message: 'Must be less than 64 characters.',
        value: 63,
      },
    ],
  },
  {
    type: 'text',
    name: 'last_name',
    label: 'Last Name',
    required: true,
    validations: [
      {
        name: 'regex',
        message: 'Only English characters are allowed.',
        value: '^[a-zA-Z0-9]*$',
      },
      {
        name: 'maxlength',
        message: 'Must be less than 64 characters.',
        value: 63,
      },
    ],
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    required: true,
    validations: [
      {
        name: 'regex',
        message: 'Only English characters are allowed.',
        value: '^[a-z0-9]+@[a-z0-9]+\\.[a-z]{2,}$',
      },
      {
        name: 'maxlength',
        message: 'Must be less than 47 characters.',
        value: 46,
      },
    ],
  },
  {
    type: 'phone',
    name: 'phone_number',
    label: 'Mobile number',
    required: true,
    validations: [
      {
        name: 'regex',
        message: 'Only numbers are allowed.',
        value: '^[0-9]+$',
      },
      {
        name: 'maxlength',
        message: 'Must be less than 47 characters.',
        value: 10,
      },
      {
        name: 'minlength',
        message: 'Must not be less than 4 characters.',
        value: 4,
      },
    ],
  },
  {
    type: 'password',
    name: 'password',
    label: 'Password',
    required: true,
    validations: [
      {
        name: 'maxlength',
        message: 'Must be less than 15 characters.',
        value: 15,
      },
      {
        name: 'minlength',
        message: 'Must not be less than 8 characters.',
        value: 8,
      },
      {
        name: 'regex',
        message: '1 or more numbers.',
        value: '^.*[0-9].*$',
      },
      {
        name: 'regex',
        message: '1 or more lower case letters.',
        value: '^.*[a-z].*$',
      },
      {
        name: 'regex',
        message: '1 or more upper case letters.',
        value: '^.*[A-Z].*$',
      },
    ],
  },
];

const mockRegistrationRequest: RegistrationRequest = {
  first_name: 'John',
  middle_name: '',
  last_name: 'Doe',
  email: 'john@test.com',
  phone_number: '12345678',
}
