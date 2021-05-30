function hosLoad(hosDistrict,hosNamakkal,hosChennai,hosSalem,hosErode,hosCoimbatore,uname1){
    hosDistrict=document.getElementById("hosDistrict").value;
    hosNamakkal=document.getElementById("hosNamakkal").value;
    hosChennai=document.getElementById("hosChennai").value;
    hosSalem=document.getElementById("hosSalem").value;
    hosErode=document.getElementById("hosErode").value;
    hosCoimbatore=document.getElementById("hosCoimbatore").value;
    uname1=String(document.getElementById("uname1").value);
    pnumber1=String(document.getElementById("pnumber1").value);
    if (uname1 != "" && pnumber1 != 0) {
        if (hosDistrict == hosNamakkal) {
            window.location="namakkal.html";
        }
        else if(hosDistrict == hosErode){
            window.location="erode.html";
        }
        else if(hosDistrict == hosSalem){
            window.location="salem.html";
        }
        else if(hosDistrict == hosChennai){
            window.location="chennai.html";
        }
        else{
            window.location="coimbatur.html";
        }
    }
    else{
        if(uname1 === "")
        {
            alert("Please Enter the name");
        }
        else if(pnumber1 === "")
        {
            alert("Please Enter the Phonenumber");
        }
    }
}