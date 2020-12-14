import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { ReportComponent } from 'src/app/pages/report/report.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { EnvelopesComponent } from './pages/envelopes/envelopes.component';
import { OpenEnvelopeComponent } from './pages/open-envelope/open-envelope.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'report',
    component: ReportComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
  },
  {
    path: 'recover-password',
    component: RecoverPasswordComponent,
  },
  {
    path: 'envelopes',
    component: EnvelopesComponent,
  },
  {
    path: 'open-envelope/:id',
    component: OpenEnvelopeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
