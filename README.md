# Testing apache cordova
this is a test app for apache cordova, using the design pattern mvc
this proyect uses localStorage and indexedDB to store data locally using the browser API

you can use this app as an example of cordova-apps and indexedDB

## How to create the app
to generate an andorid app with cordova you must see the [Apache Cordova Documentation](https://cordova.apache.org/docs/en/latest/)

Install cordova globally
```bash
npm i -g cordova
```
Check requirements
```bash
cordova requirments
```
Install platforms
```bash
cordova platform add android
```
Generate an android app
```bash
cordova build android
```
Run app directly on your device (needs USB debuggind enabled)
```bash
cordova run android --device
```
