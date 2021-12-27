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

// mostPopularDays

function mostPopularDays(week) {
    const week = [
        {day: 'Monday', popularity: ''},
        {day: 'Tuesday', popularity: ''},
        {day: 'Wednesday', popularity: ''},
        {day: 'Thursday', popularity: ''},
        {day: 'Friday', popularity: ''},
        {day: 'Saturday', popularity: ''},
        {day: 'Sunday', popularity: ''}
    ];
    let sortByPopularity = day.sort(function(d1, d2) {
        return d1.num - d2.num;
    })
    console.log(sortByPopularity);
}