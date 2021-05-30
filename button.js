function adderode(name,bc,cn,location){
     name=String(document.getElementById("name").value);
     bc=String(document.getElementById("bc").value);
     cn=Number(document.getElementById("cn").value);
     location=String(document.getElementById("location").value);
     document.getElementById("n1").innerHTML=name;
     document.getElementById("b1").innerHTML=bc;
     document.getElementById("nu1").innerHTML=cn;
     document.getElementById("loc").innerHTML=location;
     if (name != 0 && bc != 0 && cn != 0 && location != 0) {
          alert("Thanks For your Response");
     }
     else{
          alert("Please fill the form correctly");
     }
}
