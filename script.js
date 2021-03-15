function calc() {
    var a =  parseInt(document.getElementById("value1").value); 
    var b =  parseInt(document.getElementById("value2").value); 
    var oper = document.getElementById("operation").value;
    var calculate;

    if (oper == "add") {
      calculate = a + b;  
    } else if (oper == "sub") {
        calculate = a - b; 
    } else if (oper == "mul") {
        calculate = a * b; 
    } else if (oper == "div") {
        calculate = a / b; 
    }    
    document.getElementById("value3").value = calculate
    
 
 }  
   