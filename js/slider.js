// JavaScript Document
var obj=null;
var A=document.getElementById("nav").getElementsByTagName("a");
obj=A[0];
for(var i=1;i<A.length;i++){
	if(window.location.href.indexOf(A[i].href)>=0)
		obj=A[i];
	}
obj.id="nav_current";
