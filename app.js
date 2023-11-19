const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors')
const fs = require('fs')

app.use(express.static('public'));
//limiting image size to 50mb
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
// app.use('/uploads', express.static(path.join('Server/uploads')));

//need to uncommand to deploy
// app.use(cors({
// 	origin:"https://myblogs-dk3t.onrender.com"
// }))

app.use(express.static(__dirname+'/'));

// const shopRouter = require('./Routes/ShopRouter');
const authRouter = require('./Routes/userrouter');
// const productRouter = require('./Routes/ProductRouter');
const movieRouter = require('./Routes/MovieRouter');
const netflixRouter = require('./Routes/NetflixAuthRoute');

//need to uncommand to deploy
// deploy
const wsServer = new ws.Server({
	server:app.listen(3000),
	host:"localhost",
	path:"/"
})

wsServer.on("connection",(w) => {
	console.log("someone connected");
	w.on("message",(msg) => {
		console.log("got message",msg);
		w.send(msg)
	})
})

// deploy
app.use((err,req,res,next) => {
	if(req.file) {
		fs.unlink(req.file.path, err => {
			console.log(err);
		})
	}
})

//connect mongodb
const PORT = process.env.PORT || 5000

//connect mongodb
mongoose
	.connect(
		'mongodb+srv://homedelivery:homedelivery123@cluster0.7er1qq8.mongodb.net/?retryWrites=true&w=majority'
	)
	.then(() => {
		console.log('connected to Database');
		app.listen(5000); // start Node + Express server on port 5000  
	})
	.catch((error) => {
		console.log(error);
	});

app.use(bodyParser.json()); // to get body ,this should be used before routers
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/uploads', express.static(path.join('Server/uploads')));
app.use(express.static(__dirname + '/'));
// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
	//middleware
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PATCH, DELETE, OPTIONS'
	);
	next();
});  

// here route should be mentioned
  
// app.use('/shop', shopRouter);
app.use('/user', authRouter);
// app.use('/product', productRouter);
app.use('/netflix', movieRouter);
app.use('/netflixAuth', netflixRouter);

// for unsupported router error handler
app.use((req, res, next) => {
	const error = new HttpError('could not find this route..');
	throw error;
});

//after using all routes
app.use((error, req, res, next) => {
	if (res.sendHeader) {
		return next(error);
	}
	res
		.status(error.code || 500)
		.json({ message: error.message || 'An Unknown Error Occurred!' });
});

app.use('/uploads', express.static(path.join('uploads')));
app.use(
	'/uploads',
	express.static(path.join('uploads'))
);
app.use(
	'/uploads',
	express.static(path.join('uploads'))
);

// const PORT = process.env.PORT || 5000

// //running the app in previously defined port
// const server = app.listen(PORT, () => {
// 	console.log(`Server is up and running on: ${PORT}`)
// })
