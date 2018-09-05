function geturl()
{
	var geturl = document.getElementById("repeat_url");
	var result = document.getElementById("gbf_url");
	result.innerHTML = "http://game.granbluefantasy.jp/"+geturl.value;
	geturl.value = "";
}
