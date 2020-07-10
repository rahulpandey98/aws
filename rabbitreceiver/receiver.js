const express = require('express');
var app = express();

var amqp = require('amqplib/callback_api');

const port = 3001;

amqp.connect('amqp://localhost', (err, conn)=>{
    conn.createChannel((err, ch)=>{
        var queue = 'firstqueue';
        
        

        ch.assertQueue(queue, {durable: false});
       
        console.log('waiting for message in ${queue}');
        ch.consume(queue, (message)=> {
            console.log('received ${message.content}');
        }, {noAck: true});
        });
        
    });
        
        app.listen(port, () => console.log('app listening on port ${port}!'))