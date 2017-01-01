Mozilla Volunteer Reporting
====

Goal
---

The goal is to provide a reporting platform which automatically creates reports from data sources so volunteers can show and see what they are contributing too.

Start the server
---

Requirements:
* Node 7 or higher
* MongoDB locally installed on your machine

```
$ cd server
$ npm install
$ npm start
```

Create ```server/config.json``` and add the values from the following json, you will need to get the values from your auth0.com instance.

```
{
  "auth": {
    "AUTH0_DOMAIN": "<AUTH0_DOMAIN>",
    "AUTH0_CLIENT_ID": "<AUTH0_CLIENT_ID>",
    "AUTH0_CLIENT_SECRET": "<AUTH0_CLIENT_SECRET>",
    "CALLBACK_URL": "http://localhost:3000/authCallback",
    "RETURN_AFTER_LOGIN_URL": "http://localhost:3001",
    "RETURN_AFTER_LOGOUT_URL": "http://localhost:3001",
    "CLIENT_LOGIN_URL": "http://localhost:3001/login"
  },
  "session": {
    "secret": "You're secret here!"
  }
}
```

Now you can reach the API through ```localhost:3000```.

If you want to watch for changes and automatically restart the server after changes, you can install node-dev and then start the watch tasks.

```
$ npm install -g node-dev
$ npm run watch
```

Start the client
---

Make sure you have installed gulp and gulp-cli.
See: [Readme](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) for reference.

Use the `gulp serve` command for development.  
Use the `gulp build` command to build a dist folder.

You can reach the Frontend trough ```http://localhost:3001```.  
The [Browsersync UI](https://browsersync.io) can be reached through ```http://localhost:3002```.

Start the datasources jobs
---

TBD


Create and set up auth0
---

1. Set up an account on [auth0](https://www.auth0.com)
2. Create a [new client](https://manage.auth0.com/#/clients) and add the secrets to the ```config.json``` file
3. Add the ```CALLBACK_URL``` value from ```config.json``` to the "Allowed Callback URLs" textarea
4. Add the ```RETURN_AFTER_LOGIN_URL``` value from ```config.json``` to the "Allowed Origins (CORS)" textarea
5. Add the ```RETURN_AFTER_LOGOUT_URL``` value from ```config.json``` "Allowed Logout URLs" textarea
6. (Weird, but did not find any workaround) Add the ```RETURN_AFTER_LOGOUT_URL``` value from ```config.json``` to the "Allowed Logout URLs" textarea in [your account](https://manage.auth0.com/#/account/advanced) (!) as well
7. (Temporary until we can get the content from the server) Add the client ID and the domain from the ```config.json``` to the ```login.js``` controller in ```client/src/app/components/login``` as well.
