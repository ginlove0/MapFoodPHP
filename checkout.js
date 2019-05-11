function check_out() {

    document.getElementById("myClear").disabled = true;
    document.getElementById("btnAdd").disabled = true;
    // document.getElementsByTagName("CategoryMap").disabled = true;
    //document.getElementById("Frozenitem") = "abc";
    document.getElementById("Fshitem").style.visibility="hidden";
    document.getElementById("Bevitem").style.visibility="hidden";
    document.getElementById("Helitem").style.visibility="hidden";
    document.getElementById("Petitem").style.visibility="hidden";
    document.getElementById("Frzitem").style.visibility="hidden";

    document.getElementById("checkout_form").innerHTML = purchaseForm;
}

function check_out_cancle(){
    document.getElementById("myClear").disabled = false;
    document.getElementById("addCart").innerHTML = '';
    document.getElementById("checkout_form").innerHTML = '';
    document.getElementById("detail").innerHTML = '';
    document.getElementById("btnAdd").disabled = false;
    document.getElementById("Fshitem").style.visibility="visible";
    document.getElementById("Bevitem").style.visibility="visible";
    document.getElementById("Helitem").style.visibility="visible";
    document.getElementById("Petitem").style.visibility="visible";
    document.getElementById("Frzitem").style.visibility="visible";

    // fshFood();
}


