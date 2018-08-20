
/**
 * ES6 MQTT server class
 */
class SampleMQTTServer {

  constructor(){
    this.mqtt = require('mqtt');
    this.client = this.mqtt.connect('mqtt://broker.hivemq.com');
    this.connectingAndSubscribe();
  }

  connectingAndSubscribe() {
    this.client.on('connect', () => {
      this.client.subscribe('oC%4w@shop/invoice:1.2.1/all');
      this.client.subscribe('oC%4w@shop/invoice:1.2.1/test');
    })
    this.client.on('message', (topic, message) => {
      switch (topic) {
        case 'oC%4w@shop/invoice:1.2.1/all':
          return this.showCls(message)
        case 'oC%4w@shop/invoice:1.2.1/test':
          return this.showMessage(message)
      }
      console.log('No handler for topic %s', topic)
    })
  }

  showCls( message ) {
    message = JSON.parse( message );
    console.log(`SUBSCRIBE Server 2 :: factor id is ${ message.id } in ${ message.date }.`);
  }
  
  showMessage( message ) {
    console.log(`SUBSCRIBE Server Fr :: message is ${ message }`);
  }
  
}

const e = new SampleMQTTServer();


