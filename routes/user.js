/**
 * Created by WarMachine on 23/06/18.
 */
const md5 = require('md5');
const helperFunctions = require('./helperFunctions');
// const { check } = require('express-validator/check');
const responses = require('./responses');
const constants = require('./constants');

const key = { 'apiKey': 'b0ec268c5739b5f345c951ce825a8c32', 'apiSecret': '98d310aacebe4f9085a76a0b5f1f77e7' },
	API = require('last.fm.api'),
	api = new API(Object.assign(key, { debug: true }));

module.exports.userSignup           = userSignup;
module.exports.userLogin            = userLogin;
module.exports.callbackForLastFm    = callbackForLastFm;
module.exports.getDashboardData     = getDashboardData;
module.exports.addFavourites        = addFavourites;
module.exports.deleteFavourites     = deleteFavourites;
module.exports.getFavourites        = getFavourites;
module.exports.userLoginViaLastFm   = userLoginViaLastFm;
module.exports.getUserInfoApi		= getUserInfoApi;
module.exports.getTopArtistsApi		= getTopArtistsApi;
module.exports.getTopAlbumsApi		= getTopAlbumsApi;
module.exports.getRecentTracksApi	= getRecentTracksApi;

function userSignup (req, res) {
	req.checkBody('username', 'username is required').notEmpty();
	req.checkBody('password', 'Minimum length of password must 5').isLength({min: 5});
	req.checkBody('password', 'Password should be alph-numeric').isAlphanumeric();

	var errors = req.validationErrors();
    /*
    To Do
     */
	if (errors) {
		return responses.sendInternalServerResponse(res, 'Invalid Parameters',errors);
	}
    
	const username = req.body.username;
	const password = req.body.password;
	checkUsernameExists(username)
        .then((result)=> {
			console.log(result);
	let sql_query = 'INSERT INTO tb_users (username, password,access_token) VALUES (?,?,?)';
	let bind_params = [username, md5(password), md5(password+new Date())];
	return helperFunctions.executeQuery(sql_query,bind_params);
})
        .then((result) => {
	return responses.sendActionCompleteResponse(res);
})
        .catch((ex) => {
	return responses.sendInternalServerResponse(res, ex);
});
    
    
    
}

function userLogin (req, res) {
	req.checkBody('username', 'username is required').notEmpty();
	req.checkBody('password', 'Minimum length of password must 5').isLength({min:5});

	var errors = req.validationErrors();
    /*
     To Do
     */
	if (errors) {
		return responses.sendInternalServerResponse(res,'Either username or parameter is missing');
	}

	const username = req.body.username;
	const password = req.body.password;
	let sql_query = 'SELECT username,access_token,last_fm_session_token,password FROM tb_users WHERE username = ? AND password = ? LIMIT 1';
	let bind_params = [username, md5(password)];
	let user = null;

	helperFunctions.executeQuery(sql_query, bind_params)
        .then((result) => {
	console.log('######### result', result);
	if(!result || !Array.isArray(result) || !result.length) {
		throw new Error('Invalid Username or password');
	}
	else {
		user = result[0];
		let new_access_token = helperFunctions.generateAccessToken((user.access_token || user.password));
		console.log('NEW ACCESS TOKEN', new_access_token, user);

		sql_query = 'UPDATE tb_users SET access_token = ? WHERE username = ? AND password = ?';
		bind_params = [new_access_token, username, md5(password)];
		user.access_token = new_access_token;
		return helperFunctions.executeQuery(sql_query,bind_params);
	}

})
        .then((result) => {
	console.log('Updating result', result);
	return responses.sendActionCompleteResponse(res,null, {access_token : user.access_token, usn : username});
})
        .catch((exception) => {
	console.log('------ex ', exception.message);
	return responses.sendInternalServerResponse(res,exception.message);
});

}

function userLoginViaLastFm (req, res) {
	let token = req.body.token;
	let usn = req.body.usn;
	console.log('login via last fm');
	let cb_url;
	if(token && usn) {
		cb_url = 'http://34.211.60.64/profile?usn='+usn+'&key='+ token;
	}
	else {
		cb_url = 'http://34.211.60.64/';
	}
	return responses.sendActionCompleteResponse(res, null, {
		url : api.auth.webAuthUrl(cb_url)
	});
	// res.redirect();
}

function callbackForLastFm (req, res) {
	let token = req.body.token;
	let session_token = null;
	let username = req.body.usn || null;
	let userDetails  = {};
	let access_token = null;
	if (token){

        // Get a session so we can make modifications
		api.auth.getSession({token: token})
            .then(session => {

                // Now that we have a session try to add some tags (a method that requires auth)
	console.log('----------- sk ', session.session.key);
	session_token = session.session.key;
	return api.user.getInfo({
		sk: session_token
	});

})
            .then(result => {
	console.log(result);
	if(!result || !result.user || !result.user.name) {
		return responses.sendInternalServerResponse(res);
	}

	if(!username) {
		username = result.user.name;
	}
	userDetails = result.user;
	let sql_query = 'SELECT username,access_token FROM tb_users WHERE username = ?';
	let bind_params = [username || result.user.name.toString().toLowerCase()];
	return helperFunctions.executeQuery(sql_query, bind_params);
})
            .then((result) => {
	let sql_query;
	let bind_params;
	if(result && Array.isArray(result) && result.length) {
		console.log('UPDATE CASE ', result[0]);
		access_token = result[0].access_token;
		sql_query = 'UPDATE tb_users SET last_fm_session_token = ? WHERE username = ?';
		bind_params = [session_token, username];
	}
	else {
		let password = md5('test#123');
		access_token = md5(password + new Date() + username);
		sql_query = 'INSERT INTO tb_users (username,password,access_token,last_fm_session_token) VALUES (?,?,?,?)';
		bind_params = [username,password,access_token,session_token];
	}

	userDetails.access_token = access_token;

	return helperFunctions.executeQuery(sql_query,bind_params);
})
            .then((result)=>{
	console.log('Sending Resopnse', userDetails, result);
	return responses.sendActionCompleteResponse(res, null, userDetails);
})
            .catch(err => {
	console.error('ERRORED!', JSON.stringify(err));
});

	}
}


function getDashboardData (req, res) {
	req.checkBody('access_token', 'Parameters missing').notEmpty();
	var errors = req.validationErrors();
	if(errors) {
		return responses.sendInternalServerResponse(res, 'Parameters are Missing');
	}

	const access_token = req.body.access_token;
	authenticateViaAccessToken(access_token)
		.then((result) => {
			const last_fm_session_token = result[0].last_fm_session_token;
			Promise.all([
				getRecentTracks(last_fm_session_token),
				getTopAlbums(last_fm_session_token),
				getTopArtists(last_fm_session_token)
			])
				.then((results)=>{
					const responseObject = {
						recent_tracks : results[0],
						top_albums : results[1],
						top_artists : result[2]
					};

					return responses.sendActionCompleteResponse(res,null,responseObject);
				})
				.catch((exception)=>{
					console.log('Exception : ', exception);
					return responses.sendInternalServerResponse(res);
				});
		});
}


function getUserInfoApi (req, res) {
	req.checkBody('access_token', 'Parameters missing').notEmpty();
	var errors = req.validationErrors();
	if(errors) {
		return responses.sendInternalServerResponse(res, 'Parameters are Missing');
	}

	const access_token = req.body.access_token;
	let is_last_fm_account_connected = true;
	console.log('User INFO API access_token ', access_token);
	authenticateViaAccessToken(access_token)
		.then((result) => {
			console.log('User INFO API getting data from last.fm', result);
			if(!result || !Array.isArray(result) || !result.length) {
				throw new Error('Session Expired. Please login and try again.');
			}
			const last_fm_session_token = result[0].last_fm_session_token;
			if(!last_fm_session_token) {
				is_last_fm_account_connected = false;
				return new Promise((resolve)=> {
					resolve({});
				});
			}
			else {
				return getUserInfo(last_fm_session_token);
			}
		})
		.then((result) => {
			let userInfo = result.user || {};
			let dataObject = {
				name : userInfo.name,
				age : userInfo.age,
				country : userInfo.country,
				gender : userInfo.gender,
				url : userInfo.url,
				playcount : userInfo.playcount,
				is_last_fm_account_connected : is_last_fm_account_connected
			};
			

			return responses.sendActionCompleteResponse(res,null,{data : dataObject});
		})
		.catch((exception) => {
			return responses.sendInternalServerResponse(res, exception.message);
		});
}

function getTopArtistsApi (req, res) {
	req.checkBody('access_token', 'Parameters missing').notEmpty();
	var errors = req.validationErrors();
	if(errors) {
		return responses.sendInternalServerResponse(res, 'Parameters are Missing');
	}

	const access_token = req.body.access_token;
	authenticateViaAccessToken(access_token)
		.then((result) => {
			if(!result || !Array.isArray(result) || !result.length) {
				throw new Error('Session Expired');
			}

			const last_fm_session_token = result[0].last_fm_session_token;
			return getTopArtists(last_fm_session_token);
		})
		.then((result) => {
			// result = constants.mockTopArtists;
			if(!result || !result.topartists || !result.topartists.artist || !Array.isArray(result.topartists.artist)) {
				throw new Error('Unable to fetch Top Artists from last.fm');
			}
			
			let responseArray = [];
			let albumArray = result.topartists.artist;
			for(let i=0;i<albumArray.length;i++) {
				let dataObject = {};
				dataObject['name'] = albumArray[i].name;
				dataObject['playcount'] = albumArray[i].playcount;
				responseArray.push(dataObject);
			}

			return responses.sendActionCompleteResponse(res,null,{data : responseArray});
		})
		.catch((exception) => {
			return responses.sendInternalServerResponse(res, exception.message);
		});
}


function getTopAlbumsApi (req, res) {
	req.checkBody('access_token', 'Parameters missing').notEmpty();
	var errors = req.validationErrors();
	if(errors) {
		return responses.sendInternalServerResponse(res, 'Parameters are Missing');
	}

	const access_token = req.body.access_token;
	authenticateViaAccessToken(access_token)
		.then((result) => {
			if(!result || !Array.isArray(result) || !result.length) {
				throw new Error('Session Expired');
			}

			const last_fm_session_token = result[0].last_fm_session_token;
			return getTopAlbums(last_fm_session_token);
		})
		.then((result) => {
			console.log('Album Result', result);
			// result = constants.mockTopAlbums;
			if(!result || !result.topalbums || !result.topalbums.album || !Array.isArray(result.topalbums.album)) {
				throw new Error('Unable to fetch top albums from last.fm');
			}
			else {
				let responseArray = [];
				let albumArray = result.topalbums.album;
				for(let i=0;i<albumArray.length;i++) {
					let dataObject = {};
					dataObject['album_name'] = albumArray[i].name;
					dataObject['artist'] = albumArray[i].artist ? albumArray[i].artist.name : '-';
					dataObject["playcount"] = albumArray[i].playcount;
					responseArray.push(dataObject);
				}

				return responses.sendActionCompleteResponse(res,null,{data : responseArray});
			}
		})
		.catch((exception) => {
			return responses.sendInternalServerResponse(res, exception.message,[]);
		});
}

function getRecentTracksApi (req, res) {
	req.checkBody('access_token', 'Parameters missing').notEmpty();
	var errors = req.validationErrors();
	if(errors) {
		return responses.sendInternalServerResponse(res, 'Parameters are Missing');
	}

	const access_token = req.body.access_token;
	let last_fm_session_token;
	let fav_obj={};

	authenticateViaAccessToken(access_token)
		.then((result) => {
			if(!result || !Array.isArray(result) || !result.length) {
				throw new Error('Session Expired');
			}

			last_fm_session_token = result[0].last_fm_session_token;
			let sql_query = 'SELECT * from tb_fav_tracks WHERE user_id = ?';
			let bind_params = [result[0].user_id];

			return helperFunctions.executeQuery(sql_query,bind_params);
		})
		.then((result) => {
			for(let i=0;i<result.length;i++){
				fav_obj[result[i].track_name] = result[i].fav_id;
			}
			console.log("OBJECT   ", fav_obj);
			return getRecentTracks(last_fm_session_token);
		})
		.then((result) => {
			console.log('Recent Track Result', result);
			result = constants.mockRecentTracks;
			if(!result || !result.recenttracks || !result.recenttracks.track || !Array.isArray(result.recenttracks.track)) {
				throw new Error('Unable to fetch recent tracks from last.fm');
			}
			else {
				let responseArray = [];
				// let trackArray = result.recenttracks.track;

				// let test = `<a href="#" onclick="Dislike(`+ 2+')">Dislike</a> ';
				// console.log("TEST STRING %%%%%%%%%%    ", test);
				for(let i=0;i<trackArray.length;i++) {
					let dataObject = {};
					dataObject['album'] = trackArray[i].album ? trackArray[i].album['#text'] : '-';
					dataObject['artist'] = trackArray[i].artist ? trackArray[i].artist['#text'] : '-';
					dataObject['name'] = trackArray[i].name;
					if(fav_obj[trackArray[i].name]) {
						dataObject['is_liked'] = true;
					}
					else {
						dataObject['is_liked'] = false;
					}

					dataObject["fav_id"] = fav_obj[trackArray[i].name];

					responseArray.push(dataObject);
				}

				return responses.sendActionCompleteResponse(res,null,{data : responseArray});
			}
		})
		.catch((exception) => {
			return responses.sendInternalServerResponse(res, exception.message);
		});
}



function addFavourites (req, res) {
	req.checkBody('access_token', 'parameter missing').notEmpty();
	req.checkBody('track_name', 'parameter missing').notEmpty();

	var errors = req.validationErrors();
	if(errors) {
		return responses.sendInternalServerResponse(res,'Parameters are Missing');
	}
    
	const access_token = req.body.access_token;
	const track_name = req.body.track_name;
	const artist = req.body.artist || null;
	const album = req.body.album || null;
	authenticateViaAccessToken(access_token)
        .then((result) => {
	if(!result || !Array.isArray(result) || !result.length) {
		throw new Error('Session Expired');
	}
			
	const sql_query = 'INSERT INTO tb_fav_tracks (user_id, track_name,artist,album) VALUES (?,?,?,?)';
	const bind_params = [result[0].user_id, track_name,artist,album];
	return helperFunctions.executeQuery(sql_query, bind_params);
})
        .then((result) => {
	return responses.sendActionCompleteResponse(res,null,{fav_id : result.insertId});
})
        .catch((ex) => {
	return responses.sendInternalServerResponse(res, ex.message);
});
}


function deleteFavourites (req, res) {
	req.checkBody('access_token', 'parameter missing').notEmpty();
	req.checkBody('fav_id', 'parameter missing').notEmpty();

	var errors = req.validationErrors();
	if(errors) {
		return responses.sendInternalServerResponse(res,'Parameters are Missing');
	}

	const access_token = req.body.access_token;
	const fav_id = req.body.fav_id;
	authenticateViaAccessToken(access_token)
        .then((result) => {
	if(!result || !Array.isArray(result) || !result.length) {
		throw new Error('Session Expired');
	}

	const sql_query = 'DELETE FROM tb_fav_tracks WHERE fav_id = ?';
	const bind_params = [fav_id];
	return helperFunctions.executeQuery(sql_query, bind_params);
})
        .then((result) => {
	return responses.sendActionCompleteResponse(res);
})
        .catch((ex) => {
	return responses.sendInternalServerResponse(res,ex);
});
}


function getFavourites (req, res) {
	req.checkBody('access_token', 'parameter missing').notEmpty();
    // req.checkBody('track_name', 'Invalid email provided').notEmpty();

	var errors = req.validationErrors();
	if(errors) {
		return responses.sendInternalServerResponse(res,'Parameters are Missing');
	}

	const access_token = req.body.access_token;
    // const track_name = req.body.track_name;
	authenticateViaAccessToken(access_token)
        .then((result) => {
	if(!result || !Array.isArray(result) || !result.length) {
		throw new Error('Session Expired');
	}

	const sql_query = 'SELECT * FROM tb_fav_tracks WHERE user_id = ?';
	const bind_params = [result.user_id];
	return helperFunctions.executeQuery(sql_query, bind_params);
})
        .then((result) => {
	return responses.sendActionCompleteResponse(res,null,{fav_tracks : result});
})
        .catch((ex) => {
	return responses.sendInternalServerResponse(res,ex);
});
}

function getTopArtists(last_fm_session_token) {
	return new Promise((resolve, reject)=>{
		return api.user.getTopArtists({sk : last_fm_session_token})
            .then((result) => {
	return resolve(result);
})
            .catch((exception) => {
	return reject(exception);
});
	});
}

function getTopAlbums(last_fm_session_token) {
	return new Promise((resolve, reject)=>{
		return api.user.getTopAlbums({sk : last_fm_session_token})
            .then((result) => {
	return resolve(result);
})
            .catch((exception) => {
	return reject(exception);
});
	});
}

// function getRecentTracks(last_fm_session_token) {
// 	return new Promise((resolve, reject)=>{
// 		return api.user.getRecentTracks({sk : last_fm_session_token})
// 			.then((result) => {
// 				return resolve(result);
// 			})
// 			.catch((exception) => {
// 				return reject(exception);
// 			});
// 	});
// }



function getRecentTracks(last_fm_session_token) {
	return new Promise((resolve, reject)=>{
		return api.user.getRecentTracks({sk : last_fm_session_token})
            .then((result) => {
	return resolve(result);
})
            .catch((exception) => {
	return reject(exception);
});
	});
}


function authenticateViaAccessToken (access_token) {
	return new Promise((resolve, reject) => {
		console.log('Authenticating :  ', access_token);
		if(!access_token) {
			return reject('Access Token Missing');
		}
        
		const sql_query = 'SELECT * FROM tb_users WHERE access_token = ?';
		const bind_params = [access_token];
        
		helperFunctions.executeQuery(sql_query,bind_params)
            .then((result) => {
	console.log('Authenticated User ', result);
	if(result && Array.isArray(result) && result.length) {
		return resolve(result);
	}
	else {
		return reject('Session Expired');
	}
})
            .catch((exception) => {
	return reject(exception);
});
	});
}

// function checkEmailExists (email) {
//     return new Promise((resolve, reject) => {
//         if(!email) {
//             return reject('Parameter missing');
//         } else {
//             const sql_query = 'SELECT EMAIL FROM tb_users WHERE email = ?';
//             const bind_params = [email];
//             helperFunctions.executeQuery(sql_query, bind_params)
//                 .then((result)=> {
//                     if(result.length) {
//                         return reject('Email already exists');
//                     }
//                    
//                     return resolve();
//                 })
//                 .catch((ex)=>{
//                     return reject(ex);
//                 });
//         }
//     });
// }

function checkUsernameExists (username) {
	return new Promise((resolve, reject) => {
		if(!username) {
			return reject('Parameter missing');
		} else {
			const sql_query = 'SELECT username FROM tb_users WHERE username = ?';
			const bind_params = [username];
			helperFunctions.executeQuery(sql_query, bind_params)
                .then((result)=> {
	if(result.length) {
		return reject('Username already exists');
	}

	return resolve();
})
                .catch((ex)=>{
	return reject(ex);
});
		}
	});
}

function getUserInfo(last_fm_session_token) {
	return new Promise((resolve, reject)=>{
		return api.user.getInfo({sk : last_fm_session_token})
			.then((result) => {
				return resolve(result);
			})
			.catch((exception) => {
				return reject(exception);
			});
	});
}






