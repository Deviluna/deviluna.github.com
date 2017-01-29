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
	