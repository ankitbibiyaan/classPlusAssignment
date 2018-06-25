/**
 * Created by WarMachine on 22/06/18.
 */
process.env.NODE_CONFIG_DIR = 'config/';
const app_instance = process.argv.NODE_APP_INSTANCE;
process.argv.NODE_APP_INSTANCE = '';
config = require('config');
process.argv.NODE_APP_INSTANCE = app_instance;

const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const expressValidator = require('express-validator');
const expressSession = require('express-session');
const mysqlLib = require('./routes/mysqlLib');
const router = express.Router();
const moment = require('moment');
const user = require('./routes/user');
const cors = require('cors');


app.use((req, res, next) => {
	console.log("----------------------------------------------------------------------------------------------");
	console.log('Time ===> ', moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),'  API ===>', req.url, '  Method ===> ', req.method);
	console.log("----------------------------------------------------------------------------------------------");
	next();
});

app.set('port', config.get('PORT'));
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({limit : '50mb', extended : true}));
app.use(bodyParser.json({limit : '50mb'}));
app.use(cors());
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested With, Content-Type, Accept');

	// Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
	next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(expressValidator());
// app.use(expressSession({
//     secret : process.env.SESSION_SECRET,
//     saveUninitialized : false,
//     resave : false
// }));


app.post('/signup', user.userSignup);
app.post('/login', user.userLogin);
app.post('/login_via_last_fm', user.userLoginViaLastFm);
app.post('/authenticated_from_fm', user.callbackForLastFm);
app.post('/add_favourite', user.addFavourites);
app.post('/remove_favourite', user.deleteFavourites);
app.post('/get_favourites', user.getFavourites);
app.post('/get_dashboard_data', user.getDashboardData);
app.post('/get_user_info', user.getUserInfoApi);
app.post('/top_artists', user.getTopArtistsApi);
app.post('/top_albums', user.getTopAlbumsApi);
app.post('/recent_tracks', user.getRecentTracksApi);

const server = http.createServer(app).listen(app.get('port'), function (error) {
	if(error) {
		console.log('Something bad happened : ', error);
	}
	else {

		console.log('Server listening on port : ', app.get('port'));
	}
});