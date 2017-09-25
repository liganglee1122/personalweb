define(function(require, exports, module) {
"use strict";

 function add(a, b)
 {
	 console.log('enter add{a= '+a+',b= '+b+'}');
	 return parseInt(a)+parseInt(b);
 }
 
 module.exports={
	 add:add
 }


});