const fs = require('fs');
const http = require('http');

const os = require('os');


const totalmemory = os.totalmem();
const freememory = os.freemem();

console.log(freememory);
console.log(totalmemory);



const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('hello world');
    res.end();
  }
});


server.listen(4000);
console.log('listening on port 4000');

server.on('connection', (socket) => {
  console.log('new connection');
})

fs.readdir('../prac1', function (err, readfiles) {
  if (err) console.log('Error', err);
  else console.log('result ', readfiles);
})
