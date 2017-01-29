function hello(){
	alert("hello");
	
}
function add(){

	var ipt1 = document.getElementById('input1');//获取input的节点
   var v1 = ipt1.value;//获取input的值
   var ipt2 = document.getElementById('input2');//获取input的节点
   var v2 = ipt2.value;//获取input的值
   var ans=parseInt(v1)+parseInt(v2);
   document.getElementById("p1").innerHTML = ans;
	}
	
function sort(){
	var str=document.getElementById('input3').value.trim();
	var s=str.split(" ");
	document.getElementById("p2").innerHTML = s.sort();
}

function getCookie(c_name)
{
if (document.cookie.length>0)
{ 
c_start=document.cookie.indexOf(c_name + "=")
if (c_start!=-1)
{ 
c_start=c_start + c_name.length+1 
c_end=document.cookie.indexOf(";",c_start)
if (c_end==-1) c_end=document.cookie.length
return unescape(document.cookie.substring(c_start,c_end))
} 
}
return ""
}
function clickCookie(){
	username=document.getElementById('input4').value;
	setCookie('username',username,365)
	checkCookie();
}
function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : "; expires="+exdate.toGMTString())
}

function checkCookie()
{
username=getCookie('username')
if (username!=null && username!="")
	document.getElementById("p3").innerHTML = username;
}

function mouseOver()
{
	document.getElementById("testP").innerHTML = "鼠标就在这里";
}
function mouseOut()
{
	document.getElementById("testP").innerHTML = "鼠标不在这里";
}
var second=0; 
var minute=0; 
var hour=0; 

function interval() 
{ 
second++; 
if(second==60) 
{ 
second=0;minute+=1; 
} 
if(minute==60) 
{ 
minute=0;hour+=1; 
} 
document.getElementById("timeP").innerHTML  = hour+"时"+minute+"分"+second+"秒"; 
setTimeout("interval();",1000); 
} 
function pageStart(){
	checkCookie();
	setTimeout(interval, 1000 );
}