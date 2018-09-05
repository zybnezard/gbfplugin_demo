function geturl()
{
	var geturl = document.getElementById("repeat_url");
	var result = document.getElementById("gbf_url");
	result.innerHTML = "http://game.granbluefantasy.jp/"+geturl.value;
	geturl.value = "";
}

function showtime()
{
	var t = new Date();
	var y = t.getYear();
	var mo = t.getMonth();
	var d = t.getDay();
	var h = t.getHours();
	var m = t.getMinutes();
	var s = t.getSeconds();
	mo = checketime(mo);
	d = checketime(d);
	m = checketime(m);
	s = checketime(s);
	var time = "当前时间：" + h + ":" + m + ":" + s;
	
	
	var element = document.getElementById("showtime");
	if(!element.firstChild)
	{
		var para = document.createElement("p");
		var node = document.createTextNode(time);
		para.appendChild(node);
		
		element.appendChild(para);
	}
	else
	{
		element.firstChild.innerHTML = time;
	}
	setTimeout('showtime()',1000);
	
}

function checketime(time)
{
	if(time<10)
	{
		time = "0" + time;
	}
	return time;
}

function initialize()
{
	showtime();
	showdate();
}