// mobile header
$(document).ready(function(){
    $('.sidenav').sidenav();
  });

//   calculateFoodOrder
$(`#numAnimalsBtn`).click(function(numAnimals, avgFood) {
    var numAnimalsField = $(`#numAnimalsInput`);
    var numAnimals = numAnimalsField.val();
    var avgFood = 3 * numAnimals;
    var placeOrder = true;
    if (numAnimals <= 0) {
        placeOrder = false;
        $('#lessOrEqual0').show();
        console.log(avgFood);
    }
    if (numAnimals >= 1){
        placeOrder = true;
        $('#lessOrEqual0').hide();
        $('#greaterThan0').show();
        console.log(avgFood);
    }
})

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
  }