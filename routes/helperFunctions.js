/**
 * Created by WarMachine on 23/06/18.
 */
const md5 = require('md5');

module.exports.executeQuery =        executeQuery;
module.exports.generateAccessToken = generateAccessToken;

function executeQuery (sql_query, sql_params) {
	return new Promise((resolve, reject) => {
		const sql = connection.query(sql_query,sql_params, (sql_error, sql_result) => {
			console.log("Executing Query ", sql.sql, " ERROR : ", sql_error, "RESULT :", sql_result);
			if(sql_error || !sql_result) {
				reject('Unable to get result from DB');
			}
			else {
				resolve(sql_result);
			}
		});
	});
}


function generateAccessToken (old_access_token) {
	if(!old_access_token) {
		return null;
	}
	else {
		return md5(old_access_token + new Date());
	}
}