define(function(require, exports, module) {
"use strict";

debugger;
var utils=require('./seajs-util.js');
var jquery=require('../lib/jquery-1.12.4.js');

function greeting(name)
{
	console.log(utils.add(4,5));
	alert('greeting '+name);
}

module.exports={
	greeting:greeting
}

});