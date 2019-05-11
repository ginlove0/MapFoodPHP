function frzFood() {
  document.getElementById("Frzitem").src = "./images/frz.png";
  document.getElementById("Fshitem").src = "";
  document.getElementById("Bevitem").src = "";
  document.getElementById("Helitem").src = "";
  document.getElementById("Petitem").src = "";
  //$('Frzitem').show();
}
function fshFood() {
  document.getElementById("Helitem").src = "";
  document.getElementById("Petitem").src = "";
  document.getElementById("Frzitem").src = "";
  document.getElementById("Bevitem").src = "";
  document.getElementById("Fshitem").src = "./images/fsh.png";
}
function bevFood() {
  document.getElementById("Helitem").src = "";
  document.getElementById("Petitem").src = "";
  document.getElementById("Frzitem").src = "";
  document.getElementById("Fshitem").src = "";
  document.getElementById("Bevitem").src = "./images/bev.png";
}
function helFood() {
  document.getElementById("Petitem").src = "";
  document.getElementById("Frzitem").src = "";
  document.getElementById("Fshitem").src = "";
  document.getElementById("Bevitem").src = "";
  document.getElementById("Helitem").src = "./images/hel.png";
}
function petFood() {
  document.getElementById("Helitem").src = "";
  document.getElementById("Frzitem").src = "";
  document.getElementById("Fshitem").src = "";
  document.getElementById("Bevitem").src = "";
  document.getElementById("Petitem").src = "./images/pet.png";
}



function loadXMLDoc(id, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "./product.xml", true);

  xmlhttp.responseType = 'document';

  // Force the response to be parsed as XML
  xmlhttp.overrideMimeType('text/xml')

  xmlhttp.onreadystatechange = function () {

    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      

      const data = getXMLDoc(xmlhttp, id);
      document.getElementById("detail").innerHTML = data;
      
      //get the maximum stock from data
      const maxStock = JSON.parse(localStorage.getItem('data')).temp_stock

    
      document.getElementById("quantityItem").innerHTML = `
      <form onsubmit="callPHPCart(); return false">
      Quantity:<input type="number" required type="number" min="1" max="${maxStock}" id="quantityNo" />
      <button id="btnAdd" >add</button>
      </form>
      `
      
      return data;
      
    }
  }
  
  //localStorage.removeItem("id");
  xmlhttp.send();


}



function getXMLDoc(xml, id) {
  //store id for reuse it accross the js function
  localStorage.setItem("id", id)
  var xmlDoc = xml.responseXML;
  var table = '';
  // var table = "<tr><th>Product ID</th><th>Product Name</th><th>Unit Price</th><th>Unit Quantity</th><th>In Stock</th></tr>";
  var x = xmlDoc.getElementsByTagName("product");
  const product_id = x[id].getElementsByTagName("product_id")[0].childNodes[0].nodeValue;
  const product_name = x[id].getElementsByTagName("product_name")[0].childNodes[0].nodeValue;
  const u_price = x[id].getElementsByTagName("unit_price")[0].childNodes[0].nodeValue;
  const u_qty = x[id].getElementsByTagName("unit_quantity")[0].childNodes[0].nodeValue;
  const i_stock = x[id].getElementsByTagName("in_stock")[0].childNodes[0].nodeValue;
  table += "<tr><td>" + product_id +"</td><td>" + product_name +"</td><td>" + u_price+"</td><td>" + u_qty +
    "</td><td>" + i_stock + "</td></tr>";


  //create tempData and save it in localStorage
  const tempData = {
    p_id: x[id].getElementsByTagName("product_id")[0].childNodes[0].nodeValue,
    p_name: x[id].getElementsByTagName("product_name")[0].childNodes[0].nodeValue,
    price: x[id].getElementsByTagName("unit_price")[0].childNodes[0].nodeValue,
    temp_qty: x[id].getElementsByTagName("unit_quantity")[0].childNodes[0].nodeValue,
    temp_stock: parseInt(x[id].getElementsByTagName("in_stock")[0].childNodes[0].nodeValue)
  }

  localStorage.setItem("data", JSON.stringify(tempData))

  
    

  // var array1 = [{id: 1}, {id: 2}];

 

  

  // // map = {id: 1}
  // localStorage.setItem("map", JSON.stringify(array1))

  // const map = JSON.parse(localStorage.getItem("map"));

  // var found = map.find(function(element) {
  //   return element.id == 2;
  // });

//   let found;
//   let map = JSON.parse(localStorage.getItem("cart"))
//   const data = {
//     id: product_id
//   }

//   if(map) {
//     found = map.find(function(element) {
//           if(element.id === product_id) {
//             console.log("FOUND");
//             element.id = "test";
       
//           } 

//       });
    
//     console.log(found);
//     localStorage.setItem("cart", JSON.stringify(found))

//   } else {
   
//     map = [];
//     map.push(data);

//     localStorage.setItem("cart", JSON.stringify(map))
//   }

//   console.log(JSON.parse(localStorage.getItem("cart")));

// console.log(tempData);  
  return table;


  
  
 
  

}





