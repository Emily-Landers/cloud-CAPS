'use strict';

const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-west-2'});

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:363537339612:pickup';

const payload = {
  Message: 'Heyo from the LOCAL!',
  TopicArn: topic
};

sns.publish(payload).promise()
.then(data => console.log(data))
.catch(err => console.log(err))