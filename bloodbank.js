function load(district,namakkal,chennai,salem,erode,coimbatore,name,pn){
    district=String(document.getElementById("district").value);
    chennai=String(document.getElementById("chennai").value);
    namakkal=String(document.getElementById("namakkal").value);
    salem=String(document.getElementById("salem").value);
    erode=String(document.getElementById("erode").value);
    coimbatore=String(document.getElementById("chennai").value);
    name=String(document.getElementById("name").value);
    pn=Number(document.getElementById("pn").value);
    if (name != "" && pn != 0) {
        if (district == chennai) {
            window.location="chennaiblood.html";
        }
        else if (district == namakkal) {
            window.location="namakkalblood.html";
        }
        else if (district == salem){
            window.location="salemblood.html";
        }
        else if (district == erode) {
            window.location="erodeblood.html";
        }
        else {
            window.location="coimbatoreblood.html";
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