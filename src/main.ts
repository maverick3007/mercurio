import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';



import { AppComponent, environment } from './app/';

import { appRouterProviders } from './app/app.routes';

import { AuthenticationService} from './app/services/authentication.service';
import { OrganisationService} from './app/services/organisation.service'
import { QuestionService} from './app/services/question.service'
import { DownloadService} from './app/services/download.service'

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,  [
    appRouterProviders, HTTP_PROVIDERS, 
    provide(AuthenticationService, {useClass: AuthenticationService}),
    provide(OrganisationService, {useClass: OrganisationService}),
    provide(QuestionService, {useClass: QuestionService}),
    provide(DownloadService, {useClass: DownloadService})
]);

