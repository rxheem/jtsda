'use strict'

/* Requesting permission from the user to allow notifications early on
** We may eventually start offering a notification service where we alerts
** users on events and postings
*/
if (Notification.permission !== "granted")
  Notification.requestPermission();
