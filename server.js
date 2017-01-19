var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

var bodyParser = require('body-parser')
var nodemailer = require('nodemailer')

var app = express();
var compiler = webpack(config);

app.use( bodyParser() );

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/contact', function(req, res, next) {
	console.log("Post to contact page");
	// create reusable transporter object using the default SMTP transport
	// var transporter = nodemailer.createTransport('smtps://mailer100124@gmail.com:P@ssw0rd100124@smtp.gmail.com');
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'mailer100124@gmail.com',
			pass: 'P@ssw0rd100124'
		}
	});

	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: '"Node Mailer" <mailer100124@gmail.com>', // sender address
	    to: 'chasemc67@gmail.com', // list of receivers
	    subject: 'Response from Laura', // Subject line
	    text: req.body.message // plaintext body
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
	    console.log('Message sent: ' + info.response);
	});
	res.send({message: "email sent successfully"});
});

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at: ' + port);
})
