# Quasar App (quasar-todo)

Solarized dark             |  Solarized Ocean
:-------------------------:|:-------------------------:
![](https://...Dark.png)  |  ![](https://...Ocean.png)

![Screen Shot 2021-10-04 at 10 00 23 AM](https://user-images.githubusercontent.com/1928898/135864924-9c85ff8a-89fc-4f93-8c9d-d3f530594e01.png) 
![Screen Shot 2021-10-04 at 10 22 12 AM](https://user-images.githubusercontent.com/1928898/135868542-9b0b7db3-1ea4-4ec3-99a3-8c8825460014.png) 
![Screen Shot 2021-10-04 at 10 21 57 AM](https://user-images.githubusercontent.com/1928898/135868604-6ecaf191-208d-4c8a-a9e9-8771ef576f0b.png)


A Quasar Framework app

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).


### Generate Web App icon
```
icongenie generate -i app-icon.png --skip-trim
```

# Firebase CLI [how switch apps](https://stackoverflow.com/questions/36432458/how-do-i-switch-apps-from-the-firebase-cli)

- List all your existent projects
```firebase projects:list```
- Create a project "alias" interactively
```firebase use --add```
- Mark a new current project by id/ alias
```
firebase use <project_id>
firebase use <alias>
```

Note: Check saved ```cat .firebaserc``` config to see/update manually changes

# How do I [remove a hosted site](https://stackoverflow.com/questions/42591099/how-do-i-remove-a-hosted-site-from-firebase) from firebase
1. Run ```firebase hosting:disable``` through the firebase-tools CLI first.
2. Go to Firebase Console and select Hosting from the menu of the left.
3. You will see the deployed project with a list of your historical actions like Deployed, disabled, etc.
4. Only after you have disabled the site, the "three vertical dots" menu will be available for you to choose the action to delete the deployment.


# Firebase deploy
1. ```firebase use <project>```
2. ```firebase init```
    - select Database & Hosting -> Enter
    - realtime db security rules applied save into database.rules.json -> Enter
    - use your public directory (public) -> type /dist/spa -> Enter
    - configure single-spa app (rewrite /index.html) -> select No
    - dist/spa/index.html already exist. Overwrite? -> select No
3.  ```firebase deploy```

# Mobile platform
## List all ios devices
```
cd src-cordova
run ios --list
```

## Test with Xcode simulator
```quasar run -m cordova -T -e "iPhone-12, 14.4""```

## Lunch on real device
Important: Before deploy to real device need to run code below in terminal.
Note: If still not working, close Xcode and deploy again.
```
cordova prepare ios
quasar dev -m cordova -T ios
```

