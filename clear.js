function myClear() {
    //save id before we clear it!
    const id = localStorage.getItem("id");
    loadXMLDoc(id)
    //set id as blank
    localStorage.setItem("id", "");
    //re-print it
    callPHPCart();
    const documentID = document.getElementById("addCart");
    // documentI
    documentID.innerHTML = "";
    //localStorage.removeItem("id");
    

    //remove localStorage quantity when click Clear button
    localStorage.removeItem("max_qty");
    document.getElementById("countTotal").innerHTML = "";

    //remove localStorage price when click Clear button
    localStorage.removeItem("max_price");

    
  
  }