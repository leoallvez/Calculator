function add(s){
	document.Cal.Input.value+=s;
}

function result(){
	document.Cal.Input.value=eval(Cal.Input.value);
}

function clean(){
	document.Cal.Input.value="";
}