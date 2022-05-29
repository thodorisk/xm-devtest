import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./routes/dashboard/dashboard.module').then((m) => m.DashboardModule) },
  { path: 'registration', loadChildren: () => import('./routes/registration/registration.module').then((m) => m.RegistrationModule) },
  { path: 'welcome', loadChildren: () => import('./routes/welcome/welcome.module').then((m) => m.WelcomeModule) },
  { path: '**', redirectTo: '', 'pathMatch': 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
