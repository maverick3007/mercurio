import { provideRouter, RouterConfig }  from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';

const routes: RouterConfig = [
  {
    path: '',
    component: WelcomeComponent
  },
    {
    path: 'home',
    component: HomeComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];