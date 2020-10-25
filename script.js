
 var i=0;
 var image=[];
 window.onload=changePic;
function changePic()
{
	image[0]='messi.jpg';
	image[1]="ronaldo.jpg";
	image[2]="neymar.jpg";
	document.slide.src=image[i];
	if(i<image.length-1)
	{
		i++;
	}else{
		i=0;
	}
	if(document.getElementById("pre").innerHTML=="PEV"){
		image[i--];
      
}
}


var x=new Date();
document.getElementById("todayDate").valueAsDate=x;
function check(){
if (document.getElementById("birthdate").value!=""){
var currentDate=document.getElementById("todayDate").value;
var currentDay=parseInt(currentDate.slice(8,10)) ;
var currentMonth=parseInt(currentDate.slice(5,7)) ;
var currentYear=parseInt(currentDate.slice(0,4)) ;
var yourDate=document.getElementById("birthdate").value;
var birthDate=parseInt(yourDate.slice(8,10)) ;
var birthMonth=parseInt(yourDate.slice(5,7)) ;
var birthYear=parseInt(yourDate.slice(0,4)) ;
var month=[31,28,31,30,31,30,31,31,30,31,30,31];
if (birthDate > currentDay) { 
        currentDay += month[birthMonth - 1]; 
        currentMonth--;
    } 
    if (birthMonth > currentMonth) { 
        currentYear--; 
        currentMonth += 12; 
    } 
    var totalDate = currentDay - birthDate; 
    var totalMonth = currentMonth - birthMonth; 
    var totalYear = currentYear - birthYear; 
	document.getElementById("cage").innerHTML="Years= "+totalYear + ",  Months="+ totalMonth+ ", Days="+ totalDate + " <br><br>"; 
}
else{
	document.getElementById("cage").innerHTML="<u>Missing DoB</u><br><br>";
	}
}



var timer;
var hours=0,minutes=0,seconds=0;
document.getElementById("display").innerHTML=hours + "h : " + minutes + "m : " + seconds +"s";
function start(){
	if(document.getElementById("stopbtn").innerHTML=="Reset"){
		document.getElementById("stopbtn").innerHTML="Stop";
	}
	if(document.getElementById("startbtn").innerHTML!="Continue"){
		hours=0,minutes=0,seconds=0;
	}
	timer=setInterval(function(){
	seconds++;
	if (seconds==60){
		seconds=0;
		minutes++;
	}
	if (minutes==60){
		hours++;
		minutes=0;
	}
	document.getElementById("display").innerHTML=hours + "h : " + minutes + "m : " + seconds +"s";
	
	},1000);
}
function stop(){
	clearInterval(timer);
	if(document.getElementById("startbtn").innerHTML=="Start"){
		document.getElementById("startbtn").innerHTML="Continue";
	}
	if (document.getElementById("stopbtn").innerHTML=="Reset"){
	hours=0;
	minutes=0;
	seconds=0;
	document.getElementById("display").innerHTML=hours + "h : " + minutes + "m : " + seconds +"s";
	document.getElementById("startbtn").innerHTML="Start";
	document.getElementById("laps").innerHTML="";
}
else{
	document.getElementById("stopbtn").innerHTML="Reset";
}
}
function lap(){
document.getElementById("laps").innerHTML+= "<li>" + hours + "h : " + minutes + "m : " + seconds +"s </li>";
}



