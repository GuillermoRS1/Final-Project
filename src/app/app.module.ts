import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';

import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFireStorageModule } from '@angular/fire/compat/storage'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'
import { enviroment } from '../enviroments/enviroment';
import { SignInComponent } from './verif/sign-in/sign-in.component';
import { SignUpComponent } from './verif/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './verif/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verif/verify-email/verify-email.component'
import { AuthService } from './verif/services/auth.service';
import { ListProductsComponent } from './list-products/list-products.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './verif/dashboard/dashboard.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SignInComponent,
        SignUpComponent,
        ForgotPasswordComponent,
        VerifyEmailComponent,
        ListProductsComponent,
        HomePageComponent,
        WelcomeComponent,
        ContactComponent,
        DashboardComponent
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AngularFireModule.initializeApp(enviroment),
        AngularFireAuthModule,
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireDatabaseModule
    ]
})
export class AppModule { }
