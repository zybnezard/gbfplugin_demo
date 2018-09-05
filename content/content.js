function changeinfo()
{
	var logo = document.getElementById("s_lg_img");
	logo.src = "http://game-a1.granbluefantasy.jp/assets/img/sp/assets/leader/my/310401_sw_1_01.png";
	logo.width = 320;
	logo.height = 470;
	document.getElementsByClassName("sethome")[0].innerHTML = "测试一下";
}
changeinfo();