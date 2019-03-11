'use strict'
console.clear()

/* Requesting permission from the user to allow notifications early on
** We may eventually start offering a notification service where we alerts
** users on events and postings
*/
if (Notification.permission !== "granted")
  Notification.requestPermission()

// using es modules
import device from 'current-device'

// common.js
const device = require('current-device').default

console.log('Testing')
