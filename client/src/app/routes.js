import {Injectable} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';

import {HelloComponent} from './components/hello/hello';
import {LoginComponent} from './components/login/login';

export const STATES = [{
  name: 'App',
  url: '/',
  component: HelloComponent
}, {
  name: 'login',
  url: '/login',
  component: LoginComponent
}];

@Injectable()
export class MyUIRouterConfig {
  configure(uiRouter: UIRouter) {
    uiRouter.urlRouterProvider.otherwise('App');
  }
}
