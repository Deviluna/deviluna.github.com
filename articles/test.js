function hello(){
	alert("hello");
	
}
function add(){

	var ipt1 = document.getElementById('input1');//��ȡinput�Ľڵ�
   var v1 = ipt1.value;//��ȡinput��ֵ
   var ipt2 = document.getElementById('input2');//��ȡinput�Ľڵ�
   var v2 = ipt2.value;//��ȡinput��ֵ
   var ans=parseInt(v1)+parseInt(v2);
   document.getElementById("p1").innerHTML = ans;
	
	
}
	