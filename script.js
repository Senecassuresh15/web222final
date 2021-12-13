function validateForm(){
    if(!validEmail()){
        alert("Invalid Email!")
        return false;
    }
    if(!validPostal()){
        alert("Invalid Postal Code!")
        return false;
    }
}

function validEmail(){
    var email=document.getElementById("mail").value;
    var regex = /^[^\s@]+@[^\s@]+$/;
    if(regex.test(email)){
        //alert("Valid Email")
        return true;
    }
    else{
        //alert("Inalid Email")
        return false;
    }
}

function validPostal() {
    var code = document.getElementById("postal").value;
    var regEx = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;

    if(regEx.test(code)){
        return true;
    }
    else{
        return false;
    }
}

window.onload=function(){
    document.getElementById("textlabel").style.visibility = "hidden";
    document.getElementById("usertext").style.visibility = "hidden";
    document.getElementById("paylabel").style.visibility = "hidden";
    document.getElementById("pay").style.visibility = "hidden";
    //document.getElementById("textlabel").style.display = "none";
    //document.getElementById("usertext").style.display = "none";
    //document.getElementById("paylabel").style.display = "none";
    //document.getElementById("pay").style.display = "none";
    //document.getElementById("textlabel").setAttribute("height","0.1em");
}

function hideText(elem){
    if(elem.checked){
        document.getElementById("textlabel").style.visibility = "hidden";
        document.getElementById("usertext").style.visibility = "hidden";
        //document.getElementById("textlabel").style.display = "none";
        //document.getElementById("usertext").style.display = "none";
        //document.getElementById("textlabel").setAttribute("height","0.1em");
        document.getElementById("paylabel").style.visibility = "visible";
        document.getElementById("pay").style.visibility = "visible";
        //document.getElementById("paylabel").style.display = "block";
        //document.getElementById("pay").style.display = "block";
        document.getElementById("pay").required = true;
        document.getElementById("usertext").required = false;
    }
}

function hidePay(elem){
    if(elem.checked){
        document.getElementById("textlabel").style.visibility = "visible";
        document.getElementById("usertext").style.visibility = "visible";
        //document.getElementById("textlabel").style.display = "block";
        //document.getElementById("usertext").style.display = "block";
        //document.getElementById("textlabel").setAttribute("height","0.1em");
        document.getElementById("paylabel").style.visibility = "hidden";
        document.getElementById("pay").style.visibility = "hidden";
        //document.getElementById("paylabel").style.display = "none";
        //document.getElementById("pay").style.display = "none";
        document.getElementById("pay").required = false;
        document.getElementById("usertext").required = true;
    }
}

