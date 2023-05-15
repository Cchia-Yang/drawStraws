var butt = document.querySelector(".btn-outline-primary");
var start = document.getElementsByClassName("start")[0];
var end = document.getElementsByClassName("end")[0];
var num = document.getElementsByClassName("num")[0];
var relButt = document.getElementsByClassName("release")[0];
var resText = document.getElementsByClassName("resText")[0];
var sayHello = document.getElementsByClassName("sayHello")[0];

butt.onclick = function(){
    if((Number(end.value)<=Number(start.value))||Number(num.value)>(Number(end.value)-Number(start.value))){
        alert("範圍有誤，請重新輸入。");
        start.value="";
        end.value="";
        num.value="";
    }
    var res = new Array(Number(num.value));
    for(var i=0;i<Number(num.value);i++){
        var ranNum=Math.round(Math.random()*Number(end.value)+Number(start.value));
        if(res.indexOf(ranNum)==-1){
            res[i]=ranNum;
        }else{
            i-=1;
        }
    }
    resText.value="";
    for(var i=0;i<Number(num.value);i++){
        resText.value+=res[i];
        resText.value+="\n";
        console.log(res[i]);
    }
} 

sayHello.onclick = function(){
    alert("Hello");
} 