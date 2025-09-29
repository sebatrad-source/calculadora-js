const elemDisp = document.querySelector("#display").innerText="0";
let valor1=0;
let valor2=0;
let operacion="";

const btn1=document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn0 = document.querySelector("#btn0");
const btnsumar = document.querySelector("#btnsumar");
const btnrestar = document.querySelector("#btnrestar");
const btnmultiplicar = document.querySelector("#btnmultiplicar");
const btndividir = document.querySelector("#btndividir");
const btnigual =document.querySelector("#btnigual");

function calcular(num1,num2,op){
    switch (op){
        case "+": return num1+num2;
        case "-": return num1-num2;
        case "*": return num1*num2;
        case "/": return valor2!=0 ? num1/num2 : "Error: Division por cero";
        default: return "Operacion No Valida";
    }
}
function asignarvalor(valor){
    if(operacion===""){
        valor1=valor;
    } else {
        valor2=valor;
    }
}
function asignarValoryMostrar(valor){
    document.querySelector("#display").innerText = valor;
    asignarvalor(valor);
}

btn1.addEventListener("click", (e) => asignarValoryMostrar(Number(e.target.innerText)));
btn2.addEventListener("click", (e) => asignarValoryMostrar(Number(e.target.innerText)));
btn3.addEventListener("click", (e) => asignarValoryMostrar(Number(e.target.innerText)));
btn4.addEventListener("click", (e) => asignarValoryMostrar(Number(e.target.innerText)));
btn5.addEventListener("click", (e) => asignarValoryMostrar(Number(e.target.innerText)));
btn6.addEventListener("click", (e) => asignarValoryMostrar(Number(e.target.innerText)));
btn7.addEventListener("click", (e) => asignarValoryMostrar(Number(e.target.innerText)));
btn8.addEventListener("click", (e) => asignarValoryMostrar(Number(e.target.innerText)));
btn9.addEventListener("click", (e) => asignarValoryMostrar(Number(e.target.innerText)));
btn0.addEventListener("click", (e) => asignarValoryMostrar(Number(e.target.innerText)));

btnsumar.addEventListener("click", (e) => operacion = e.target.innerText);
btnrestar.addEventListener("click", (e) => operacion = e.target.innerText);
btnmultiplicar.addEventListener("click", (e) => operacion = e.target.innerText);
btndividir.addEventListener("click", (e) => operacion = e.target.innerText);

btnigual.addEventListener("click", () =>{
    const total = calcular(valor1,valor2,operacion);
    document.querySelector("#display").innerText=total;
    valor1=total;
    operacion="";
    valor2=0;
});