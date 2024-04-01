# ViWell Assissment

## Description

This is the solution for the automated tests for Amazon shopping app using Appium and javascript

## Requirements

to run this project and run the tests first you will need to install Node.js, npm (Node Package Manager), JDK(Java Development Kit) and setup JAVA_HOME + ANDROID_HOME + ADB Environment Variable
//you can find online and on appium documentation how to do all this since its going to need a lot of documentation and explaining also you can use appium-doctor for help

next you will need to clone the project and install npm dependencies with `npm install`

then you need to change the Device Name in wdio.conf.js to your device name

note: in order to not add the apk to the repo i assume that Amazion shopping app is preinstalled to the device
after that, you should be able to run by the run command

## Commands

its mentioned in package.json
the command to run and execute the test cases is `npm run wdio`
to generate HTML report after running type `npx allure serve allure-results`

## Tools Used

i have choosen javascript since you said its recommended with appium as required
and i have used mocha since its used with cypress(the web automation tool the company is going to use)
and webdriverio to get up and running quickly without a lost of setup since the deadline is 2 days

## Notes

1- make sure you have a decent internet connection before running the scripts(try to run usa vpn since each market is giving some extra steps sometimes)
2- i have used basic POM (Page/Screen Object Model) it can be improved with multiple layers if there is more time
3-

## Contact Information

Provide contact information for the project owner or maintainer.

- Name: Wessam Juby
- Email: wessamjuby1@gmail.com
