'use strict';
var combineReducers = require('redux').combineReducers;


var reducers = {
  option: require('./optionReducers.js'),
  user: require('./viewReducers.js')
}

module.exports = combineReducers(reducers);
