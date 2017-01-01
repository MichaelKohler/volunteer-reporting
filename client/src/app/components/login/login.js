import {Component} from '@angular/core';

@Component({
  selector: 'fountain-app',
  template: require('./login.html')
})
export class LoginComponent {
  constructor() {
    const lock = new window.Auth0Lock('<YOUR APP ID>', '<YOUR AUTH0 APP DOMAIN>', {
      auth: {
        redirectUrl: 'http://localhost:3000/authCallback',
        responseType: 'code',
        params: {
          scope: 'openid name email picture'
        }
      }});

    lock.show();
  }
}
