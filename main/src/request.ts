
import io from 'socket.io-client';

const socket = io('');

socket.on('test', function(data: any) {
  console.log(data);
});
socket.emit('send', { test: 'test' });
