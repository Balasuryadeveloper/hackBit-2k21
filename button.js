function click(){
    alert("Welcome to our Blood Bank System");
}
var a="Balasurya";
function clickon1(){
    document.getElementById("chennai").innerHTML=a;
}
var b="Abinesh";
function clickon2(){
    document.getElementById("Coimbatore").innerHTML=b;
}
var c="Kowshik kumar";
function clickon3(){
    document.getElementById("salem").innerHTML=c;
}
var d="Balasurya";
function clickon4(){
    document.getElementById("namakkal").innerHTML=d;
}
var e="Balasurya";
function clickon5(){
    document.getElementById("erode").innerHTML=e;
}
function adderode(name,bc,cn,location){
     name=String(document.getElementById("name").value);
     bc=String(document.getElementById("bc").value);
     cn=Number(document.getElementById("cn").value);
     location=String(document.getElementById("location").value);
     document.getElementById("n1").innerHTML=name;
     document.getElementById("b1").innerHTML=bc;
     document.getElementById("nu1").innerHTML=cn;
     document.getElementById("loc").innerHTML=location;
     alert("Thanks For your Response");
}
