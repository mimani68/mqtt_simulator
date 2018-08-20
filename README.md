
## Introduction

MQTT is protocol for IOT connection.

![mqtt logo](https://github.com/mimani68/express.js/blob/master/images/MQTT.png)
 
In this project we simulate some services and one external MQTT message broker. Client that assume is a single devices, send below topic for SMS sending.

       oC%4w@shop/system/connection/sms/inbox

we use random prefix for separate call in project

       oC%4w@shop

![mqtt architecture](https://github.com/mimani68/express.js/blob/master/images/mqtt-diagram.jpg)

Main server that written in ECMAScritp6 is in class form and made in SOLID principle.

![mqtt architecture](https://github.com/mimani68/express.js/blob/master/images/server.jpg)


____
## RUN PROJECT

a) for use this project you can run both file in same times.

       $ node device-client/device.iot.js
       $ node server/saman.sms.service.js


![project-screen_one](https://github.com/mimani68/express.js/blob/master/images/ReciverServer-SmsBroker-SenderClient.jpg)

![project-screen_two](https://github.com/mimani68/express.js/blob/master/images/screen-shot.jpg)


