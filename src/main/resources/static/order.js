 $(document).ready(function (){
 var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));

 console.log("Order:", dataFood);

 var dataDrink = JSON.parse(window.sessionStorage.getItem("drinkOrderData"));

 console.log("Order:", dataDrink);

 var quantitiesForOrders = [];

 console.log("enters function");

    for(var i=0; i < dataFood.length; i++){

        $('#table').append(
            '<tr>' +
            '<td class="h5">' + dataFood[i].menuItemName + '</td>' +
            '<td>' + dataFood[i].menuItemPrice + '</td>' +
            '<td>' + '<input value="1" class="form-control col-md-4" type="number" placeholder="(quantity)" name="dataFood['+i+'].quantity" id="quantity'+i+'">' + '</td>' +
            '</tr>'
        );

}
})

function updateOrderData() {
    var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));
    for (var i=0; i<dataFood.length; i++){
    var quantity = $('#quantity'+i+'').val();
    dataFood[i].quantity=quantity;
    };
    console.log(dataFood);
    window.sessionStorage.setItem("foodOrderData", JSON.stringify(dataFood));
}
$("#quantityButton").click(updateOrderData);