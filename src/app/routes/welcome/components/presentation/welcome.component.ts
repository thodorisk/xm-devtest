import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationRequest } from '../../../../api/registration/interfaces/registration-api.interface';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class WelcomeComponent implements OnInit {
  userData!: RegistrationRequest;

  constructor() {}

  ngOnInit(): void {}
}
