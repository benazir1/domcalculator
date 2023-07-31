var div=document.createElement("div");
div.setAttribute("class","main");

var div1=document.createElement("div");
div1.setAttribute("class","btn");



//textbox
var input=createtext("input","type","text","id","t1","name","t1");
document.body.append(input);
var br1=linebreak("br");
document.body.append(br1);

//button 1
var b1=document.createElement("button");
b1.setAttribute("type","button");
b1.innerHTML="1";
b1.onclick=function(x){
    x="1";
    document.getElementById('t1').value+=x;
  
}
document.body.append(b1);

//button 2
var b2=document.createElement("button");
b2.setAttribute("type","button");
b2.innerHTML="2";
b2.onclick=function(x){
    x="2";
    document.getElementById('t1').value+=x;
    
 
 }

document.body.append(b2);

//button 3
var b3=document.createElement("button");
b3.setAttribute("type","button");
b3.innerHTML="3";
b3.onclick=function(x){
    x="3";
    document.getElementById('t1').value+=x;
    
 
 }
 document.body.append(b3);



 //button back
 var b4=document.createElement("button");
 b4.setAttribute("type","button");
 b4.innerHTML="<-";
 b4.onclick=function(x){
     x="<-";
    var ev = document.getElementById('t1');
    ev.value = ev.value.slice(0,-1);
  
  }
  document.body.append(b4);
 
 

//button +
var b5=document.createElement("button");
b5.setAttribute("type","button");
b5.innerHTML="+";
b5.onclick=function(x){
    x='+';
    document.getElementById('t1').value+=x;
    
 
 }
document.body.append(b5);
var br1=linebreak("br");
document.body.append(br1);

//2 row
//button 4
var b6=document.createElement("button");
b6.setAttribute("type","button");
b6.innerHTML="4";
b6.onclick=function(x){
    x=4;
    document.getElementById('t1').value+=x;
    
 
 }
document.body.append(b6);


//button 5
var b7=document.createElement("button");
b7.setAttribute("type","button");
b7.innerHTML="5";
b7.onclick=function(x){
    x=5;
    document.getElementById('t1').value+=x;

 
 }
document.body.append(b7);

//button 6
var b20=document.createElement("button");
b20.setAttribute("type","button");
b20.innerHTML="6";
b20.onclick=function(x){
    x=6;
    document.getElementById('t1').value+=x;
    
 
 }
document.body.append(b20);

//button  clear
var b8=document.createElement("button");
b8.setAttribute("type","button");
b8.innerHTML="c";
b8.onclick=function(x){
    document.getElementById('t1').value="";
     
 }
document.body.append(b8);


//button -
var b9=document.createElement("button");
b9.setAttribute("type","button");
b9.innerHTML="-";
b9.onclick=function(x){
    x='-';
    document.getElementById('t1').value+=x;
   }
document.body.append(b9);
var br1=linebreak("br");
document.body.append(br1);


//row3
//button 7
var b10=document.createElement("button");
b10.setAttribute("type","button");
b10.innerHTML="7";
b10.onclick=function(x){
    x=7;
    document.getElementById('t1').value+=x;
     
 }

document.body.append(b10);


//button 8

var b11=document.createElement("button");
b11.setAttribute("type","button");
b11.innerHTML="8";
b11.onclick=function(x){
    x=8;
    document.getElementById('t1').value+=x;
    
 
 }

document.body.append(b11);

var b12=document.createElement("button");
b12.setAttribute("type","button");
b12.innerHTML="9";
b12.onclick=function(x){
    x=9;
    document.getElementById('t1').value+=x;
     
 }

 document.body.append(b12);

 //button %

var b13=document.createElement("button");
b13.setAttribute("type","button");
b13.innerHTML="%";
b13.onclick=function(x){
    x='%';
    document.getElementById('t1').value+=x;
     
 }

document.body.append(b13);


//button *
var b14=document.createElement("button");
b14.setAttribute("type","button");
b14.innerHTML="*";
b14.onclick=function(x){
    x='*';
    document.getElementById('t1').value+=x;
     
 }

document.body.append(b14);
var br1=linebreak("br");
document.body.append(br1);

//row4
//button 0
var b15=document.createElement("button");
b15.setAttribute("type","button");
b15.innerHTML="0";
b15.onclick=function(x){
    x=0;
    document.getElementById('t1').value+=x;

 
 }

document.body.append(b15);

//button .

var b16=document.createElement("button");
b16.setAttribute("type","button");
b16.innerHTML=".";
b16.onclick=function(x){
    x='.';
    document.getElementById('t1').value+=x;
 
 }

document.body.append(b16);

//button 00

var b17=document.createElement("button");
b17.setAttribute("type","button");
b17.innerHTML="00";
b17.onclick=function(x){
    x='00';
    document.getElementById('t1').value+=x;
     
 }
document.body.append(b17);




//button =
var b21=document.createElement("button");
b21.setAttribute("type","button");
b21.innerHTML="=";
b21.onclick=function(){
    var x=document.getElementById('t1').value;
    var y=eval(x);
    document.getElementById('t1').value=y;
}


//button.addEventListener("click");
document.body.append(b21);




var b19=document.createElement("button");
b19.setAttribute("type","button");
b19.innerHTML="/";
b19.onclick=function(x){
    x='/';
    document.getElementById('t1').value+=x;
    //x.value="2";
 
 }
//button.addEventListener("click");
document.body.append(b19);
var br1=linebreak("br");
document.body.append(br1);

document.body.append(div);
document.body.append(div1);


//function
function createtext(tagname,attrname,attrvalue,attrname1,attrvalue1)
{
    var input=document.createElement(tagname);
    input.setAttribute(attrname,attrvalue);
    input.setAttribute(attrname1,attrvalue1);
    return input;
}

//break
function linebreak(breaker)
{
    var br1=document.createElement(breaker);
    return br1;
}