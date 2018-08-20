const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker.hivemq.com')

client.on('connect', () => {
  client.subscribe('oC%4w@shop/system/connection/sms/payam:0.0.1/send')
})

client.on('message', (topic, message) => {
  switch (topic) {
    case 'oC%4w@shop/system/connection/sms/payam:0.0.1/send':
      return sendSMS(message)
  }
  console.log('No handler for topic %s', topic)
})

function sendSMS( message ) {
    message = JSON.parse( message );
    message.type = 'sms';
    client.publish('oC%4w@shop/system/connection/sms/inbox', JSON.stringify(message) );

    // run external SMS API
}
