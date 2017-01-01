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
