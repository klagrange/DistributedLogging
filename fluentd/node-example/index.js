const express = require('express');
const logger = require('fluent-logger');
const app = express();

// The 2nd argument can be omitted. Here is a default value for options.
logger.configure('fluentd.test', {
  host: 'localhost',
  port: 24224,
  timeout: 3.0,
  reconnectInterval: 600000 // 10 minutes
});


logger.emit('follow', {from: 'userA', to: 'userB'});

// app.get('/', function(request, response) {
//   logger.emit('follow', {from: 'userA', to: 'userB'});
//   response.send('Hello World!');
// });
// const port = process.env.PORT || 3000;
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });
