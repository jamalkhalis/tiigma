const nodemon = require('nodemon');
const path = require('path');

nodemon({
    execMap: {
        js: 'node'
    },
    script: path.join(__dirname, 'server/server'),
    ignore: [],
    ext: 'js'
})
.on('restart', function() {
    console.log('Server restarted!');
})