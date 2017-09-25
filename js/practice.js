$(document).ready(function () {
	
	console.log("ready");
	
	var student= {};
	student.name="ligang";
	student.age=26;
	
	 var jsonData = [
{"id":"4","pid":"1","name":"大家电"},
{"id":"5","pid":"1","name":"生活电器"},
{"id":"1","pid":"0","name":"家用电器"},
{"id":"2","pid":"0","name":"服饰"},
{"id":"3","pid":"0","name":"化妆"},
{"id":"7","pid":"4","name":"空调"},
{"id":"8","pid":"4","name":"冰箱"},
{"id":"9","pid":"4","name":"洗衣机"},
{"id":"10","pid":"4","name":"热水器"},
{"id":"11","pid":"3","name":"面部护理"},
{"id":"12","pid":"3","name":"口腔护理"},
{"id":"13","pid":"2","name":"男装"},
{"id":"14","pid":"2","name":"女装"},
{"id":"15","pid":"7","name":"海尔空调"},
{"id":"16","pid":"7","name":"美的空调"},
{"id":"19","pid":"5","name":"加湿器"},
{"id":"20","pid":"5","name":"电熨斗"}
];
	
	putObj2LocalStorage('stu', student);
	
	console.log(getObjFromLocalStorage('stu'));
	
	putObj2LocalStorage('jsonData', jsonData);
	console.log(getObjFromLocalStorage('jsonData'));
	
	//console.log(student.toString());
	
	//var stuStr = JSON.stringify(student);
	
	//console.log(stuStr);
	
	//sessionStorage.stu = stuStr;
	
	//localStorage.clear();
		
	//console.log(sessionStorage.stu);
	
	//var stu = JSON.parse(sessionStorage.stu);
	
	//console.log(stu);
	
	//console.log(Object.prototype.toString.call(localStorage));
	//console.log(Object.prototype.toString.call(sessionStorage));
	

	
	/*
		alert(sessionStorage.name);
		localStorage.name="ligang";
	
	sessionStorage.name="dengzeyu";
	
	if(window.localStorage)
	{
		alert("support localStorage");
	}
	else
	{
		alert("not support localStorage");
	}
	
	if(window.sessionStorage)
	{
		alert("support sessionStorage");
	}
	else
	{
		alert("not support sessionStorage");
	}
	
	*/
	
});


function putObj2LocalStorage(key, obj)
{
	localStorage.setItem(key, JSON.stringify(obj));
}

function getObjFromLocalStorage(key)
{
	return JSON.parse(localStorage.getItem(key));
}