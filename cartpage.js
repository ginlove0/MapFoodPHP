
function callPHPCart() {


    //get id that stored in browser
    const data = localStorage.getItem("id");
    console.log(data);
    if (data) {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", "./product.xml", true);
      xmlhttp.overrideMimeType('text/xml');
  
      xmlhttp.onreadystatechange = function () {
        var table = '';
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          var xmlDoc = xmlhttp.responseXML;
          // console.log(xmlDoc);
          var x = xmlDoc.getElementsByTagName("product");
  
          const p_cart_id = x[data].getElementsByTagName("product_id")[0].childNodes[0].nodeValue;
          const p_cart_name = x[data].getElementsByTagName("product_name")[0].childNodes[0].nodeValue;
          const u_cart_price = x[data].getElementsByTagName("unit_price")[0].childNodes[0].nodeValue;
          const u_cart_qty =document.getElementById("quantityNo").value;
          const i_cart_stock = x[data].getElementsByTagName("in_stock")[0].childNodes[0].nodeValue;
          table += "<tr><td>" + p_cart_id + "</td><td>" + p_cart_name + "</td><td>" + u_cart_price + "</td><td>" + u_cart_qty +
            "</td><td>" + i_cart_stock + "</td></tr>";
          
          console.log(p_cart_name);
  
          //save table in localstorage
          localStorage.setItem("table", table)
          let localTable = localStorage.getItem('table')   
          document.getElementById("addCart").innerHTML += localTable; "<br>"
          
  
          //trying to push id in array and put all data have same id at the same line but not working
        //   var arr = JSON.parse(localStorage.getItem("arr"));
        //   // arr = $.unique(data);
        //   if(arr) {
        //   arr.push(p_cart_id);
        //   localStorage.setItem("arr", JSON.stringify(arr));
        // } else {
        //   arr = new Array();
        //   arr.push(p_cart_id)
        //   localStorage.setItem("arr", JSON.stringify(arr));
        // }
        // console.log(JSON.parse(localStorage.getItem('arr')))
          
  
          const tempData = {
            p_id: x[data].getElementsByTagName("product_id")[0].childNodes[0].nodeValue,
            p_name: x[data].getElementsByTagName("product_name")[0].childNodes[0].nodeValue,
            price: x[data].getElementsByTagName("unit_price")[0].childNodes[0].nodeValue,
            temp_qty: x[data].getElementsByTagName("unit_quantity")[0].childNodes[0].nodeValue,
            temp_stock: parseInt(x[data].getElementsByTagName("in_stock")[0].childNodes[0].nodeValue)
          }

        
          //Count total quantity  
          var local_qty = parseInt(localStorage.getItem("max_qty"));
          if(local_qty){
            // console.log("go 1")
            local_qty += parseInt(u_cart_qty);
            localStorage.setItem("max_qty", parseInt(local_qty));
            //var max_qty = 0
          }else{
            // console.log("go 1")

            local_qty = 0;
            local_qty += parseInt(u_cart_qty);
            localStorage.setItem("max_qty", parseInt(local_qty));
          }
          console.log(local_qty);

          //Count total price
          var local_price = parseFloat(localStorage.getItem("max_price"));
          if(local_price){
            console.log("go if")
            local_price += u_cart_price * parseInt(u_cart_qty);
            localStorage.setItem("max_price", parseFloat(local_price));
          }else{
            console.log("go else");
            local_price=0;
            local_price += u_cart_price * parseInt(u_cart_qty);
            localStorage.setItem("max_price", parseFloat(local_price));
          }
          console.log(local_price);

          
          
          document.getElementById("countTotal").innerHTML = 
          `
          <td>Total: $ ${local_price} </td>
          <td>Number of items: ${local_qty} </td>
          <button onclick="check_out()">Check Out</button>
          `
          
        }
      }
      xmlhttp.send();
      
    }
    
  }


