import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegistrationConfirmComponent } from './registration/registration-confirm/registration-confirm.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration-confirm', component: RegistrationConfirmComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'contact', component: ContactComponent },
   /*{ path: 'not-found', component: FourOhFourComponent },*/
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
