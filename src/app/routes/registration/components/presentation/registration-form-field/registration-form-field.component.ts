import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegistrationFieldSrvDTO } from '../../../../../api/registration/interfaces/registration-api.interface';

@Component({
  selector: 'app-registration-form-field',
  templateUrl: './registration-form-field.component.html',
  styleUrls: ['./registration-form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationFormFieldComponent {
  @Input() formField!: RegistrationFieldSrvDTO;
  @Input() form!: FormGroup;

  showPassword: boolean = false;
}
