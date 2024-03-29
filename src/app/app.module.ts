import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { RegistrationConfirmComponent } from './registration/registration-confirm/registration-confirm.component';
import { ContactComponent } from './contact/contact.component';
import { TermsComponent } from './terms/terms.component';
import { UsersService } from './users/users.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { MyAccountComponent } from './my-account/my-account.component';
import { OfferTreeComponent } from './offer-tree/offer-tree.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EcologicalFootprintComponent } from './ecological-footprint/ecological-footprint.component';
import { ContactConfirmComponent } from './contact/contact-confirm/contact-confirm.component';
import { TestResultComponent } from './test-result/test-result.component';
import jwt_decode from "jwt-decode";
import { AuthInterceptor } from './interceptors/auth-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    RegistrationConfirmComponent,
    ContactComponent,
    TermsComponent,
    MyAccountComponent,
    OfferTreeComponent,
    EditUserComponent,
    EcologicalFootprintComponent,
    ContactConfirmComponent,
    TestResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [UsersService, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
     {
    provide: 'AdminGuard', // Provider name
    useValue: (token: any) => {
      token=localStorage.getItem('token');
      
      if(token != null){
       /* if(jwt_decode(token).role =="Administrateur"){
          return true;
        }else{          
          return false;
        }*/
        return true;
      }else{
        return false;
      }
      
      
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
