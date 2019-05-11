function check_out() {

    document.getElementById("myClear").disabled = true;
    document.getElementById("Frzitem").disabled = true;

    document.getElementById("checkout_form").innerHTML = purchaseForm;
}

function check_out_cancle(){
    document.getElementById("myClear").disabled = false;
    document.getElementById("addCart").innerHTML = '';
    document.getElementById("checkout_form").innerHTML = '';
    document.getElementById("detail").innerHTML = '';
}

