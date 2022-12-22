// fs is for reading fils
var fs = require('fs');

var http = require('http');
var https = require('https');

// Read certificate to use it for https
var privateKey  = fs.readFileSync(__dirname + '/certificate/private.key');
var certificate = fs.readFileSync(__dirname + '/certificate/certificate.crt');

// Read emailconfig data
const emailconfig = require('./emailConfig.js');

var cors = require('cors');
let nodemailer = require("nodemailer");
const Email = require('email-templates');

var express = require('express');
var multer = require('multer');

var upload = multer();
var app = express();


app.use(cors())
app.use(upload.array()); 
app.use(express.static('public'));


var credentials = {key: privateKey, cert: certificate};

// Create transporter based on emailConfig.js
var transporter = nodemailer.createTransport({
    host: emailconfig.host,
    secure: true,
    secureConnection: true,
    port: emailconfig.port,
    auth: {
        user: emailconfig.user, 
        pass: emailconfig.pass
    },
    tls: {rejectUnauthorized: false}
});


// Contact Us
app.post('/contact', function (req, res) {

    // console.log(req.body)
    
    const { nameForm, emailForm, phoneForm, subjectForm, messageForm } = req.body;

    email = new Email({
        views: { root:'./server/templates', options: { extension: 'ejs' } },
        message: {
            from: emailForm
        },
        preview:false,
        send: true,
        transport: transporter
    });

    email.send({
    template: 'test',
    message: {
        to: emailconfig.to
    },
    locals: {
        name: nameForm,
        emailAddress: emailForm,
        phone: phoneForm,
        subject: subjectForm,
        message: messageForm
    }
    })
    .then(result => {
        // console.log("Result:  ",result)
        return res.send(`Email Sent`);
    })
    .catch(console.error);
  })


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

// http is listen at 8082
httpServer.listen(8082);

// https is listen at 8445
httpsServer.listen(8445);