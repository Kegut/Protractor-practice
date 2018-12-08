# Protractor-practice

To Launch the application first we need to have installed NodeJS and Node Package Manager Npm
To install NodeJS and Npm you can use their official site:
NodeJS: https://nodejs.org/en/
NPM:  https://www.npmjs.com/get-npm

Install AngularJS using the command:
-npm install -g @angular/cli
Go to the app workspace and start the angular localserver
-cd my-app
-ng serve --open

Install protractor with command
-npm install -g protractor

-webdriver-manager update 
-webdriver-manager start
This will start up a Selenium ServerYour.Protractor test will send requests to this server to control a local browser.
You can see information about the status of the server at http://localhost:4444/wd/hub.

Running protractor tests.
The conf.js file have different test suite that can be accessed using the following commands
-protractor conf.js --suite all
                            top
                            search
                            heroes
 




 
 
