
 $(document).ready(function (){
 var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));

 console.log("Order:", dataFood);

 var dataDrink = JSON.parse(window.sessionStorage.getItem("drinkOrderData"));

 console.log("Order:", dataDrink);

 console.log("enters function");

    for(var i=0; i < dataFood.length; i++){

        $('#table').append(
            '<tr>' +
            '<td class="h5">' + dataFood[i].menuItemName + '</td>' +
            '<td>' +
            '</td>' +
            '<td><button class="btn btn-grey btn-sm mr-1">-</button>0<button class="btn btn-grey btn-sm ml-1">+</button></td>' +
            '<td>' + dataFood[i].menuItemPrice + '</td>' +
            '</tr>'
        );

}
})


