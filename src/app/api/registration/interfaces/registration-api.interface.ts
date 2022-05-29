import { ValidatorFn } from "@angular/forms";

export interface RegistrationFieldSrvDTO {
  type: 'text' | 'email' | 'phone' | 'password';
  name: string;
  label: string;
  required: boolean;
  validations: FieldValidationSrvDTO[];
}

export interface RegistrationFormJsonData {
  registrationFormControls: RegistrationFieldSrvDTO[]
}

export interface RegistrationFieldDTO extends RegistrationFieldSrvDTO {
  value: string | number;
}

export interface FieldValidationSrvDTO {
  name: string;
  message: string;
  value: string | number;
}

export interface RegistrationRequest {
  [fieldName: string]: string;
}
