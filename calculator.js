function add(){
    let num1=Number(document.getElementById("num1").value);
     let num2=Number(document.getElementById("num2").value);
     let solution=num1+num2;
 document.getElementById("solution").textContent= "result= " + solution;
}
function subtract(){
    let num1=Number(document.getElementById("num1").value);
     let num2=Number(document.getElementById("num2").value);
     let solution=num1-num2;
 document.getElementById("solution").textContent= "result= " + solution;
}
function multiply(){
   let num1=Number(document.getElementById("num1").value);
     let num2=Number(document.getElementById("num2").value);
     let solution=num1*num2;
 document.getElementById("solution").textContent= "result= " + solution;
}

function divide(){
    let num1=Number(document.getElementById("num1").value);
     let num2=Number(document.getElementById("num2").value);
     let solution;
     if (num2==0){
       solution="Undefined";
     }
     else{
 solution=num1/num2;
     }
    
     document.getElementById("solution").textContent= "result= " + solution;

}