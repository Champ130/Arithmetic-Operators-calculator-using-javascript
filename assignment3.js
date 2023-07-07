var a=document.getElementById("num1");
var b=document.getElementById("num2");
var x=document.getElementById("ans");



function add(){
    // var a=+document.getElementById("num1").value;
    // var b=+document.getElementById("num2").value;
    // var x=document.getElementById("ans");
    x.value=Number(a.value)+Number(b.value);
    
}
function sub(){
    // var a=+document.getElementById("num1").value;
    // var b=+document.getElementById("num2").value;
    // var x=document.getElementById("ans");
    x.value=a.value-b.value;
    
}
function mul(){
    // var a=+document.getElementById("num1").value;
    // var b=+document.getElementById("num2").value;
    // var x=document.getElementById("ans");
    x.value=a.value*b.value;
    
}
function div(){
    // var a=+document.getElementById("num1").value;
    // var b=+document.getElementById("num2").value;
    // var x=document.getElementById("ans");
    x.value=a.value/b.value;
    
}
function mod(){
    // var a=+document.getElementById("num1").value;
    // var b=+document.getElementById("num2").value;
    // var x=document.getElementById("ans");
    x.value=a.value%b.value;
    
}

function newFunction(){
    var a=document.getElementById("num1");
    var b=document.getElementById("num2");
    var x = document.getElementById("ans");
    x.value=a.value=b.value=" "
  }
