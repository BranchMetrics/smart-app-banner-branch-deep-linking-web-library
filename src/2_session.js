'use strict';
goog.provide('session');

/*jshint unused:false*/
goog.require('goog.json');
goog.require('utils');
goog.require('safejson');
goog.require('storage');

/**
 * @param {storage} storage
 * @param {boolean=} first
 * @return {Object}
 */
session.get = function(storage, first) {
	var sessionString = first ? 'branch_session_first' : 'branch_session';
	try {
		return safejson.parse(storage.get(sessionString, first)) || null;
	}
	catch (e) {
		return null;
	}
};

/**
 * @param {storage} storage
 * @param {Object} data
 * @param {boolean=} first
 */
session.set = function(storage, data, first) {
	storage.set('branch_session', goog.json.serialize(data));
	if (first) {
		storage.set('branch_session_first', goog.json.serialize(data), true);
	}
};

/**
 * @param {storage} storage
 * @param {Object} newData
 */
session.update = function(storage, newData) {
	if (!newData) {
		return;
	}
	var currentData = session.get(storage) || {};
	var data = utils.merge(currentData, newData);
	storage.set('branch_session', goog.json.serialize(data));
};

session.path = function(storage, key, value, druable){

	const path = (session) =>{
		session = Object.assign({}, session, {
			[key]: value
		})

		return session;
	}

	const session = safejson.parse(storage.get('branch_session', false))
	
	if(sessionFirst){
		storage.set('branch_session', goog.json.serialize(path(session)));		
	}

	if(druable){
		const sessionFirst = safejson.parse(storage.get('branch_session_first', true))
		if(sessionFirst){
			storage.set('branch_session_first', goog.json.serialize(path(sessionFirst)), true);	
		}
	}	
}