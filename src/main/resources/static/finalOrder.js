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
            '<td>' + dataFood[i].quantity + '</td>' +
            '</tr>'
        );
}
        for(var i=0; i < dataDrink.length; i++){

                $('#table').append(
                    '<tr>' +
                    '<td class="h5">' + dataDrink[i].drinkName + '</td>' +
                    '<td>' + dataDrink[i].drinkPrice + '</td>' +
                    '<td>' + dataDrink[i].quantity + '</td>' +
                    '</tr>'
                );



};

var totalPrice=0;
for(var i=0; i < dataFood.length; i++){
totalPrice = totalPrice + (dataFood[i].menuItemPrice*dataFood[i].quantity);
}
for(var i=0; i < dataDrink.length; i++){
totalPrice = totalPrice + (dataDrink[i].drinkPrice*dataDrink[i].quantity);
console.log(totalPrice);
}
$('#totalPrice').html(totalPrice);
})

//function updateOrderData() {
//    var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));
//    for (var i=0; i<dataFood.length; i++){
//    var quantity = $('#quantity'+i+'').val();
//    dataFood[i].quantity=quantity;
//    };
//    console.log(dataFood);
//    window.sessionStorage.setItem("foodOrderData", JSON.stringify(dataFood));
//}
//$("#quantityButton").click(updateOrderData);