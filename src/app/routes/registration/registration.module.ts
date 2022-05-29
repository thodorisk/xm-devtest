import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/modules/material.module';
import { RegistrationComponent } from './components/application/registration.component';
import { RegistrationFormFieldComponent } from './components/presentation/registration-form-field/registration-form-field.component';
import { RegistrationRoutingModule } from './registration-routing.module';

@NgModule({
  declarations: [
    RegistrationComponent,
    RegistrationFormFieldComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RegistrationRoutingModule
  ],
  providers: [],
})
export class RegistrationModule { }
