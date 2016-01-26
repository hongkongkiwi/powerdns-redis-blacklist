// worker.js
var zmq = require('zmq'),
    sock = zmq.socket('pull');

sock.connect('ipc:///tmp/pdns.sock');
console.log('Worker connected to ipc');

sock.on('message', function(msg){
  console.log('work: %s', msg.toString());
});
