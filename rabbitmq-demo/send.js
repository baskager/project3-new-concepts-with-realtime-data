const amqp = require('amqplib/callback_api');

amqp.connect('amqp://127.0.0.1', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'hello';

    ch.assertQueue(q, {durable: false});
    // Note: on Node 6 Buffer.from(msg) should be used
    ch.sendToQueue(q, new Buffer('Hello World!'));
    console.log(" [x] Sent 'Hello World!'");
  });

  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});


// https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html