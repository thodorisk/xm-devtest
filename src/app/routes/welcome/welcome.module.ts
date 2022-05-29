import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../shared/modules/material.module';
import { WelcomeComponent } from './components/presentation/welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    WelcomeRoutingModule
  ],
  providers: []
})
export class WelcomeModule { }
