'use strict';

const {Consumer} = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/363537339612/pickup',
  handleMessage: (message) => {
    console.log(message);
  }
})

app.start();