function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('date').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function red() {
  document.body.style.backgroundColor="red";
}

function blue(){
  document.body.style.backgroundColor="blue";
}

function green(){
  document.body.style.backgroundColor="green";
}

function black(){
  document.body.style.backgroundColor="black";
}

function white(){
  document.body.style.backgroundColor="white";
}

function reset(){
  document.body.style.backgroundColor="#025da3"
}
