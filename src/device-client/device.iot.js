const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://broker.hivemq.com')
// const client = mqtt.connect('mqtt://localhost:3001')

// if ( client.connected == false ) {
//   console.log(`connection failed` );
//   client.reconnect();
// }

client.on('connect', () => {
  client.subscribe('oC%4w@shop/system/connection/sms/inbox');
  client.subscribe('oC%4w@shop/invoice:1.2.1/all');
  setInterval(()=>{
    var e = new Date().toISOString()
    client.publish('oC%4w@shop/invoice:1.2.1/test', e);
  }, 2000);
});

client.on('message', (topic, message) => {
  switch (topic) {
    case 'oC%4w@shop/system/connection/sms:1.0.0/inbox':
      return showModalOfAcceptInvoice(message)
    case 'oC%4w@shop/invoice:1.2.1/all':
      return newInvoiceRequest(message)
  }
});

function newInvoiceRequest() {
  const topic = 'oC%4w@shop/invoice:1.2.1/all';
  var payload = {};
  payload.id = Math.floor(Math.random() * 101);
  payload.date = new Date().toISOString();
  console.log(`PUBLISH :: new invoice id ${ payload.id }`);
  
  payload = JSON.stringify(payload);
  client.publish( topic , payload );
}

function showModalOfAcceptInvoice( message ) {
  message = JSON.parse( message );
  if ( message.status === true ) {
    console.log(`server accept`, message.status, `, type:`, message.type );
  } else {
    console.log(`server unaccepted`, message.status, `, type:`, message.type );
  }
}

function showResultOfAccessNestService( message ) {
  message = JSON.parse( message );
  console.log(message);
}
