// mobile header
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
        
$('#numAnimalsBtn').click(function(numAnimals, avgFood){
    var numAnimalsField = $('#numAnimals');
    var numAnimals = numAnimalsField.val();
    var avgFood = numAnimals * 3;
    if (numAnimals <= 0) {
        console.log(avgFood + 'no need to place order because you said there are 0 or less animals at the moment')
    }
    else {
        $('#calculateFoodOrderResults').show();
        console.log(avgFood);

    }
})