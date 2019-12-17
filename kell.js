/*window.onload=startTime();/*lehe laadimisel kaivitatakse funktsioon, sel juhul ei pea lisama htmli*/
var sessionName="thea";
var signInTime=0;
function startTime(){
    var today=new Date();
    var date=today.getUTCDate();
    var month=today.getUTCMonth()+1;
    var year=today.getUTCFullYear();
    var hour=today.getHours();
    var minutes=today.getMinutes();
    var seconds=today.getSeconds();
    var paevad=["Esmaspaev","Teisipaev","Kolmapaev","Neljapaev","Reede","Laupaev","Puhapaev"];
    var day=today.getUTCDay();
    var tana=paevad[day-1];
    /*var hour=hour-10;
    var minutes=minutes-30;
    kontrollimiseks!!*/
    if (seconds<10){
        seconds="0"+seconds;
        document.getElementById("clock").style.background = "white";
        document.getElementById("kell").style.background = "aqua";
        document.getElementById("kell").style.color = "black";
    }
    if (seconds>10){
        document.getElementById("clock").style.background = "blue";
    }
    if (seconds>20){
        document.getElementById("clock").style.background = "yellow";
    }
    if (seconds>30){
        document.getElementById("clock").style.background = "gray";
        document.getElementById("kell").style.background = "white";
        document.getElementById("kell").style.color = "white";
    }
    if (seconds>40){
        document.getElementById("clock").style.background = "green";
    }
    if (seconds>50){
        document.getElementById("clock").style.background = "black";
    }
    if (minutes<10){
        minutes="0"+minutes;
    }
    if (hour<10){
        hour="0"+hour;
    }
    if (day<10){
        day="0"+day;
    }
    if (month<10){
        month="0"+month;
    }
    document.getElementById("clock").innerHTML=hour +":"+minutes+":"+seconds+" "+date+"."+month+"."+year+" "+tana;
    var time=setTimeout(startTime, 1000);/*(funktsioon, millisekundid millal funktsioon uuesti valja kutsutakse)*/
    }
    function getInputValue(){
        var userName= document.getElementById("userName").value;
        var userName=userName.toLowerCase();
        document.getElementById("kasutajanimi").innerHTML= "Tere, "+userName.charAt(0).toUpperCase() + userName.slice(1)+"!";
        var passWord= document.getElementById("passWord").value;
        console.log(passWord);
        document.getElementById("kell").style.display = "block"
        document.getElementById("input").style.display = "none"
        var signInTime=new Date();
        console.log(signInTime);
        if (sessionName==userName){
            document.getElementById("kasutajanimi").innerHTML= "Tere, "+userName.charAt(0).toUpperCase() + userName.slice(1)+"! Oled juba sisse logitud.";
        }

    }
    console.log(signInTime);