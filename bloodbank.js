function load(district,namakkal,chennai,salem,erode,coimbatore,name,pn,bg,ap,an,bp,bn,op,on,abp,abn){
    district=String(document.getElementById("district").value);
    chennai=String(document.getElementById("chennai").value);
    namakkal=String(document.getElementById("namakkal").value);
    salem=String(document.getElementById("salem").value);
    erode=String(document.getElementById("erode").value);
    coimbatore=String(document.getElementById("chennai").value);
    name=String(document.getElementById("name").value);
    pn=Number(document.getElementById("pn").value);
    bg=document.getElementById("bloodgroup").value;
    ap=document.getElementById("ap").value;
    an=document.getElementById("an").value;
    bp=document.getElementById("bp").value;
    bn=document.getElementById("bn").value;
    op=document.getElementById("op").value;
    on=document.getElementById("on").value;
    abp=document.getElementById("abp").value;
    abn=document.getElementById("abn").value;
    if (name != "" && pn != 0 && bg != 0) {
        if (district == chennai && bg == ap) {
            window.location="apchennai.html";
        }
        else if (district == chennai && bg == an) {
            window.location="anchennai.html";
        }
        else if (district == chennai && bg == bp) {
            window.location="bpchennai.html";
        }
        else if (district == chennai && bg == bn) {
            window.location="anchennai.html";
        }
        else if (district == chennai && bg == op) {
            window.location="opchennai.html";
        }
        else if (district == chennai && bg == on) {
            window.location="onchennai.html";
        }
        else if (district == chennai && bg == abp) {
            window.location="abpchennai.html";
        }
        else if (district == chennai && bg == abn) {
            window.location="abnchennai.html";
        }
    }
    else{
        if(name === ""){
            alert("Please Enter Your Name");
        }
        else if(pn === 0){
            alert("Please Enter Your Phonenumber");
        }
    }
}