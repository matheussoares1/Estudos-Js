//Questão 01
var ano = 2016;

if(ano % 4 == 0 && ano % 100 != 0 ){
    document.write("O ano é bissexto")
}
else{
    document.write("O ano não é bissexto")
}

//Questão 02

var num;

if(num < 0 ){
    document.write("O valor é negativo")
}
else{
    document.write("O valor é positivo")
}

//Questão 03
 var num1;
 if (num1 > 0){
    raiz = Math.sqrt(num1)
    document.write('A raiz é ', raiz ,'e o valor é positivo')
 }
 else{
    document.write("O valor é negativo")
 }