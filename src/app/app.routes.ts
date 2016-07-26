import { provideRouter, RouterConfig }  from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { QuestionFormComponent } from './question-form/question-form.component'

const routes: RouterConfig = [
  {
    path: '',
    component: WelcomeComponent
  },
    {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'questionform/:id',
    component: QuestionFormComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];