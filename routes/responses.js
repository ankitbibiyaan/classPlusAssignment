/**
 * Created by WarMachine on 23/06/18.
 */
const constants = require('./constants');

module.exports.sendActionCompleteResponse = sendActionCompleteResponse;
module.exports.sendInternalServerResponse = sendInternalServerResponse;
module.exports.sendNoDataFoundResponse    = sendNoDataFoundResponse;
module.exports.sendSessionExpiredResponse = sendSessionExpiredResponse;



function sendActionCompleteResponse (res,msg, data) {
	return res.send({
		status : constants.responseFlags.OK,
		msg : msg || constants.responseMessages.OK,
		data : data || {}
	});
}

function sendInternalServerResponse (res,msg, data) {
	return res.send({
		status : constants.responseFlags.INTERNAL_SERVER_ERROR,
		msg : msg || constants.responseMessages.INTERNAL_SERVER_ERROR,
		data : data || {}
	});
}

function sendNoDataFoundResponse (res,msg, data) {
	return res.send({
		status : constants.responseFlags.NOT_FOUND,
		msg : msg || constants.responseMessages.NOT_FOUND,
		data : data || {}
	});
}

function sendSessionExpiredResponse (res,msg, data) {
	return res.send({
		status : constants.responseFlags.UNAUTHORIZED,
		msg : msg || constants.responseMessages.UNAUTHORIZED,
		data : data || {}
	});
}


