var oper = new Array("*","-","+","/",".");
var numb = new Array("0","1","2","3","4","5","6","7","8","9");
var last = "*"; /*Variavel de último operador ou número digitado*/

function backSpace(){
	var n = document.getElementById("screen").value.length;
	/*Metodo slice() retorna partes de uma string*/
	var str = document.getElementById("screen").value.slice(0,n-1);
	if(str == ""){
		str = "0";
		last = "*";
	}
	document.getElementById("screen").value = str;
}

function maxLenght(){
	var x = false
	if(document.getElementById("screen").value.length > 10){
		x = true;
	}
	return x;
}
/*Essa funcão verifica se o parametro é um número.*/
function isNumber(s){
	var x = false;
	for(var i = 0; i < numb.length; i++){
		if(s == numb[i]){
			x = true;
		}
	}
	return x;
}
/*Essa função verifica se a última coisa digitada é um operador.*/
function isOperador(){
	var x = false;
	for(var i = 0; i < oper.length; i++){
		if(last == oper[i]){
		 	x = true;
		}
	}
	return x;
}
/*Essa função verifica o que foi digitado e adiciona na tela.*/
function add(s){
	if(!isOperador() || isNumber(s)){
		if(!maxLenght() && last != "Erro"){
			if(document.getElementById("screen").value == "0" && s != "."){
				document.getElementById("screen").value = ""
			}
			last = s;
			document.getElementById("screen").value += s;
		}
	}
}
/*Essa função limpa a tela e seta a variavel last*/
function clean(){
	document.getElementById("screen").value = "0";
	last = "*";
}
/*Essa função realiza a operação na tela e imprime o resultado*/
function result(){
	if(!maxLenght()){
		document.getElementById("screen").value = eval(document.getElementById("screen").value);
	}else{
		last = "Erro";
		document.getElementById("screen").value = last;
	}
}
