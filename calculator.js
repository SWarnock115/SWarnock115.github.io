var a;
var b;
var total;

function getvalue(resolve){
if(resolve =="one"){resolve=1;}
else if(resolve =="two"){resolve=2;}
else if(resolve =="three"){resolve=3;}
else if(resolve =="four"){resolve=4;}
else if(resolve =="five"){resolve=5;}
else {
  resolve="Please enter valid content     "
}

return resolve;
}

function add(){
  a=document.getElementById("number1").value;
  b=document.getElementById("number2").value;
  a = getvalue(a);
  b = getvalue(b);
  total=a + b;
  document.getElementById("total").value = total;
}
function sub(){
  a=document.getElementById("number1").value;
  b=document.getElementById("number2").value;
  a = getvalue(a);
  b = getvalue(b);
  total=a-b;
  document.getElementById("total").value = total;
}

function multi(){
  a=document.getElementById("number1").value;
  b=document.getElementById("number2").value;
  a = getvalue(a);
  b = getvalue(b);
  total=a*b;
  document.getElementById("total").value = total;
}

function div(){
  a=document.getElementById("number1").value;
  b=document.getElementById("number2").value;
  a = getvalue(a);
  b = getvalue(b);
  total=a/b;
  document.getElementById("total").value = total;
}
