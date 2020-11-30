import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { LoginButtonComponent } from './components/components/login-button/login-button.component';
import { SignupButtonComponent } from './components/components/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/components/authentication-button/authentication-button.component';
import { LoginNavComponent } from './components/components/login-nav/login-nav.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { EnvelopesComponent } from './pages/envelopes/envelopes.component';
import { CreateEnvelopeComponent } from './pages/create-envelope/create-envelope.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import { NgxCurrencyModule } from 'ngx-currency';
import { OpenEnvelopeComponent } from './pages/open-envelope/open-envelope.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { UserDataComponent } from './components/components/user-data/user-data.component';
import { ReportComponent } from './pages/report/report.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeroComponent,
    HomeContentComponent,
    LoadingComponent,
    MainNavComponent,
    NavBarComponent,
    HomeComponent,
    ProfileComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    LoginNavComponent,
    LoginComponent,
    CreateAccountComponent,
    RecoverPasswordComponent,
    EnvelopesComponent,
    CreateEnvelopeComponent,
    OpenEnvelopeComponent,
    CreateTransactionComponent,
    UserDataComponent,
    ReportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    ChartsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
