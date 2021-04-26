import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegistrationConfirmComponent } from './registration/registration-confirm/registration-confirm.component';
import { RegistrationComponent } from './registration/registration.component';
import { TermsComponent } from './terms/terms.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { OfferTreeComponent } from './offer-tree/offer-tree.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EcologicalFootprintComponent } from './ecological-footprint/ecological-footprint.component';
import { TestResultComponent } from './test-result/test-result.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'registration-confirm', component: RegistrationConfirmComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'offer-tree', component: OfferTreeComponent },
  { path: 'edit-user',  canActivate: ['AdminGuard'], component: EditUserComponent },
  { path: 'ecological-footprint', component: EcologicalFootprintComponent },
  { path: 'test-result', component: TestResultComponent },
   /*{ path: 'not-found', component: FourOhFourComponent },*/
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
