import { ValidatorFn, Validators } from "@angular/forms"

export function patternValidatorWithMessage (value: string, message: string): ValidatorFn {
  const delegateFn = Validators.pattern(value)
  return control => delegateFn(control) === null ? null : { message }
}

export function minLengthValidatorWithMessage (value: number, message: string): ValidatorFn {
  const delegateFn = Validators.minLength(value)
  return control => delegateFn(control) === null ? null : { message }
}

export function maxLengthValidatorWithMessage (value: number, message: string): ValidatorFn {
  const delegateFn = Validators.maxLength(value)
  return control => delegateFn(control) === null ? null : { message }
}

export function requiredValidatorWithMessage (message: string): ValidatorFn {
  const delegateFn = Validators.required;
  return control => delegateFn(control) === null ? null : { message }
}
