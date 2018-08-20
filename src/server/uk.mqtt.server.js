const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker.hivemq.com')

client.on('connect', () => {
  client.subscribe('oC%4w@shop/invoice:1.2.1/all')
})

client.on('message', (topic, message) => {
  switch (topic) {
    case 'oC%4w@shop/invoice:1.2.1/all':
      return showCls(message)
  }
  console.log('No handler for topic %s', topic)
})

function showCls( message ) {
  message = JSON.parse( message );
  console.log(`SUBSCRIBE Server 1 :: factor id is ${ message.id } in ${ message.date }.`);
  // setTimeout(() => {
    var payload = { server_id: 'ir' + message.id };
    payload.status = getRandomInt();
    payload = JSON.stringify( payload );
    client.publish('oC%4w@shop/system/connection/sms:1.0.0/send', payload );
  // }, 2000);
}

function getRandomInt() {
  var e = Math.floor(Math.random() * Math.floor(2));
  // console.log('DEBUG :: server 01 ::', e);
  if ( e === 1 ) {
    return true;
  } else {
    return false;
  }
}
