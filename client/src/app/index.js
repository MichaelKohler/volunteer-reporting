import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UIView, UIRouterModule} from 'ui-router-ng2';
import {STATES, MyUIRouterConfig} from './routes';

import {HelloComponent} from './components/hello/hello';
import {ReportsComponent} from './components/reports/list';

@NgModule({
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({states: STATES, configClass: MyUIRouterConfig})
  ],
  declarations: [
    HelloComponent,
    ReportsComponent
  ],
  bootstrap: [UIView]
})
export class AppModule {}
