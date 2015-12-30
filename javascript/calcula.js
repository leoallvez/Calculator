var oper = new Array("*","-","+","/");
var numb = new Array("0","1","2","3","4","5","6","7","8","9");
var last = "*"; /*Variavel de último operador ou número digitado*/

function maxLenght(){
	var x = false
	if(document.Cal.Input.value.length > 14){
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
/*Essa função adiciona verifica o que foi digitado e adiciona na tela.*/
function add(s){
	if(!isOperador() || isNumber(s)){
		if(!maxLenght() && last != "Erro"){
			last = s;
			document.Cal.Input.value += s;
		}
	}
}
/*Essa função limpa a tela e seta a variavel last*/
function clean(){
	document.Cal.Input.value = "";
	last = "*";
}
/*Essa função realiza a operação na tela e imprime o resultado*/
function result(){
	if(!maxLenght()){
		document.Cal.Input.value = eval(document.Cal.Input.value);
	}else{
		last = "Erro";
		document.Cal.Input.value = last;
	}
}
