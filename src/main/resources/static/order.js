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
            '<td>' + dataFood[i].menuItemPrice + '</td>' +
            '<td>' + '<input value="1" class="form-control col-md-4" type="number" placeholder="(quantity)" name="dataFood['+i+'].quantity" id="quantity'+i+'">' + '</td>' +
            '</tr>'
        );

};

    for(var i=0; i < dataDrink.length; i++){

        $('#table').append(
            '<tr>' +
            '<td class="h5">' + dataDrink[i].drinkName + '</td>' +
            '<td>' + dataDrink[i].drinkPrice + '</td>' +
            '<td>' + '<input value="1" class="form-control col-md-4" type="number" placeholder="(quantity)" name="dataDrink['+i+'].quantity" id="quantity1'+i+'">' + '</td>' +
            '</tr>'
        );

};
})

function updateOrderData() {
    var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));
    for (var i=0; i<dataFood.length; i++){
    var quantity = $('#quantity'+i+'').val();
    dataFood[i].quantity=quantity;
    };
    console.log(dataFood);
    window.sessionStorage.setItem("foodOrderData", JSON.stringify(dataFood));

    var dataDrink = JSON.parse(window.sessionStorage.getItem("drinkOrderData"));
    for (var i=0; i<dataDrink.length; i++){
    var quantity1 = $('#quantity1'+i+'').val();
    dataDrink[i].quantity=quantity1;
    };
    console.log(dataDrink);
    window.sessionStorage.setItem("drinkOrderData", JSON.stringify(dataDrink));
}

$("#quantityButton").click(updateOrderData);
