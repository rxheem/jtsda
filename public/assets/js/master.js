'use strict'

// Shows a small log in the console
console.log('The official website of the Johnson Town SDA Church. All rights reserved.')

/* Requesting permission from the user to allow notifications early on
** We may eventually start offering a notification service where we alerts
** users on events and postings
*/
if (Notification.permission !== "granted")
  Notification.requestPermission()
