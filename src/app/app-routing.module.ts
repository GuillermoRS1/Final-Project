import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './verif/forgot-password/forgot-password.component';
import { SignInComponent } from './verif/sign-in/sign-in.component';
import { SignUpComponent } from './verif/sign-up/sign-up.component';
import { VerifyEmailComponent } from './verif/verify-email/verify-email.component';
import { AuthGuard } from './verif/guard/auth.guard';
import { ListProductsComponent } from './list-products/list-products.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './verif/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ListProductsComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
