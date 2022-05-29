import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { map } from 'rxjs';
import { maxLengthValidatorWithMessage, minLengthValidatorWithMessage, patternValidatorWithMessage, requiredValidatorWithMessage } from '../../../../shared/helpers/validators-helper';
import { RegistrationFieldDTO, RegistrationFieldSrvDTO, RegistrationRequest } from '../../../../api/registration/interfaces/registration-api.interface';
import { RegistrationApiService } from '../../../../api/registration/services/registration-api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  registrationFormFields!: RegistrationFieldDTO[];
  userData: RegistrationRequest = {};

  constructor(private formBuilder: FormBuilder, private apiService: RegistrationApiService) { }

  ngOnInit(): void {
    this.initializeRegistrationFormData();
    this.registrationForm = this.formBuilder.group({});
  }

  private initializeRegistrationFormData(): void {
    this.apiService.getRegistrationFormControls().pipe(map((formData) => this.mapRegistrationFieldSrvDtoToClientDto(formData))).subscribe((formData: RegistrationFieldDTO[]) => {
      this.registrationFormFields = formData;
      this.createRegistrationForm(this.registrationFormFields);
    });
  }

  // todo possibly we can better map the srv interface to our own based on our client needs. To be done in the communication layer to reduce complexity here and follow DRY principle.
  private mapRegistrationFieldSrvDtoToClientDto(formData: RegistrationFieldSrvDTO[]): RegistrationFieldDTO[] {
    return formData.map((data) => {
      return {
        ...data,
        value: ''
      }
    });
  }

  private createRegistrationForm(fields: RegistrationFieldDTO[]): void {
    for (const field of fields) {
      const validators: ValidatorFn[] = [];

      field.validations.forEach((validation) => {
        if (field.required) {
          validators.push(requiredValidatorWithMessage(`${field.label} is required`));
        }

        if (validation.name === 'minlength' && typeof validation.value === 'number') {
          validators.push(minLengthValidatorWithMessage(validation.value, validation.message));
        } else if (validation.name === 'maxlength' && typeof validation.value === 'number') {
          validators.push(maxLengthValidatorWithMessage(validation.value, validation.message));
        } else if (validation.name === 'regex' && typeof validation.value === 'string') {
          validators.push(patternValidatorWithMessage(validation.value, validation.message));
        }
      })

      this.registrationForm.addControl(
        field.name,
        this.formBuilder.control(field.value, validators)
      );
    }
  }

  submitForm(): void { }
}
