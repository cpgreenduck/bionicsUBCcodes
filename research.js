var cats=document.querySelectorAll(".postCatContainer");
function getQueryVariable(variable)
	{
	    var query = window.location.search.substring(1);
	    var vars = query.split("&");
	    for (var i=0;i<vars.length;i++) {
	            var pair = vars[i].split("=");
	            if(pair[0] == variable){return pair[1];}
	    }
	    return(false);
	}
var v1=getQueryVariable("id");

window.onload=alert(v1);

window.onload=function(){
	console.log(v1);
	var elid=document.getElementById(v1);
	console.log(elid);
	if (elid) { //if id not empty
		cats[0].classList.remove("expanded"); 
		elid.classList.add("expanded");
		AOS.init();
	}
}
