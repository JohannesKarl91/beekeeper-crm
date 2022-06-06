// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'beekeeper-crm',
    appId: '1:62193584844:web:2ed2b1c93182dbb2f5d069',
    databaseURL: 'https://beekeeper-crm-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'beekeeper-crm.appspot.com',
    apiKey: 'AIzaSyAXXLOjfFCQQAxR_ZXu1sq5Tmz2ksmYeNQ',
    authDomain: 'beekeeper-crm.firebaseapp.com',
    messagingSenderId: '62193584844',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
