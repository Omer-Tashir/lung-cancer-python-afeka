import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { isLoggedInGuard } from './services/auth.guard';
import { ClientQuestionnaireComponent } from './client-questionnaire/client-questionnaire.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'client-questionnaire',
    canActivate: [isLoggedInGuard],
    component: ClientQuestionnaireComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(private router: Router, private authService: AuthService) {
    this.router.errorHandler = (error: any) => {
      console.log(error);
      this.authService.logout();
    };
  }
}