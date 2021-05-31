function load(district,namakkal,chennai,salem,erode,coimbatore,name,pn,bg,ap,an,bp,bn,op,on,abp,abn){
    district=String(document.getElementById("district").value);
    chennai=String(document.getElementById("chennai").value);
    namakkal=String(document.getElementById("namakkal").value);
    salem=String(document.getElementById("salem").value);
    erode=String(document.getElementById("erode").value);
    coimbatore=String(document.getElementById("coimbatore").value);
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
    if (name != "" && pn != 0 && bg != 0 ) {
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
        else if (district == coimbatore && bg == ap) {
            window.location="apcoimbatore.html";
        }
        else if (district == coimbatore && bg == an) {
            window.location="ancoimbatore.html";
        }
        else if (district == coimbatore && bg == bp) {
            window.location="bpcoimbatore.html";
        }
        else if (district == coimbatore && bg == bn) {
            window.location="bncoimbatore.html";
        }
        else if (district == coimbatore && bg == op) {
            window.location="opcoimbatore.html";
        }
        else if (district == coimbatore && bg == on) {
            window.location="oncoimbatore.html";
        }
        else if (district == coimbatore && bg == abp) {
            window.location="abpcoimbatore.html";
        }
        else if (district == coimbatore && bg == abn) {
            window.location="abncoimbatore.html";
        }
        else if (district == namakkal && bg == ap) {
            window.location="apnamakkal.html";
        }
        else if (district == namakkal && bg == an) {
            window.location="annamakkal.html";
        }
        else if (district == namakkal && bg == bp) {
            window.location="bpnamakkal.html";
        }
        else if (district == namakkal && bg == bn) {
            window.location="bnnamakkal.html";
        }
        else if (district == namakkal && bg == op) {
            window.location="opnamakkal.html";
        }
        else if (district == namakkal && bg == on) {
            window.location="onnamakkal.html";
        }
        else if (district == namakkal && bg == abp) {
            window.location="abpnamakkal.html";
        }
        else if (district == namakkal && bg == abn) {
            window.location="abnnamakkal.html";
        }
        else if (district == erode && bg == ap) {
            window.location="aperode.html";
        }
        else if (district == erode && bg == an) {
            window.location="anerode.html";
        }
        else if (district == erode && bg == bp) {
            window.location="bperode.html";
        }
        else if (district == erode && bg == bn) {
            window.location="bnerode.html";
        }
        else if (district == erode && bg == op) {
            window.location="operode.html";
        }
        else if (district == erode && bg == on) {
            window.location="onerode.html";
        }
        else if (district == erode && bg == abp) {
            window.location="abperode.html";
        }
        else if (district == erode && bg == abn) {
            window.location="abnerode.html";
        }
        else if (district == salem && bg == ap) {
            window.location="apsalem.html";
        }
        else if (district == salem && bg == an) {
            window.location="ansalem.html";
        }
        else if (district == salem && bg == bp) {
            window.location="bpsalem.html";
        }
        else if (district == salem && bg == bn) {
            window.location="bnsalem.html";
        }
        else if (district == salem && bg == op) {
            window.location="opsalem.html";
        }
        else if (district == salem && bg == on) {
            window.location="onsalem.html";
        }
        else if (district == salem && bg == abp) {
            window.location="abpsalem.html";
        }
        else{
            window.location="abnsalem.html";
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