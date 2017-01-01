import {Injectable} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';

import {HelloComponent} from './components/hello/hello';
import {ReportsComponent} from './components/reports/list';

export const STATES = [
  {
    name: 'App',
    url: '/',
    component: HelloComponent
  },
  {
    name: 'Reports',
    url: '/reports',
    component: ReportsComponent
  }
];

@Injectable()
export class MyUIRouterConfig {
  configure(uiRouter: UIRouter) {
    uiRouter.urlRouterProvider.otherwise('App');
  }
}
