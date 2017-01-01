import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UIView, UIRouterModule} from 'ui-router-ng2';
import {STATES, MyUIRouterConfig} from './routes';

import {HelloComponent} from './components/hello/hello';
import {LoginComponent} from './components/login/login';

@NgModule({
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({states: STATES, configClass: MyUIRouterConfig})
  ],
  declarations: [
    HelloComponent,
    LoginComponent
  ],
  bootstrap: [UIView]
})
export class AppModule {}
