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
            '<td>' + '<input class="form-control col-md-4" type="text" placeholder="0" name="dataFood['+i+'].quantity" id="quantity">' + '</td>' +
            '</tr>'
        );

}
})

function updateOrderData() {
    console.log("posting data...");
    var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));
    $('.table tr').each(function(i,row){
    var $row=$(row);
    $quantities=$row.find('input:dataFood['+i+'].quantity');
    var quantity = $("#quantity").val();
    console.log(quantity);
    console.log("works");
    dataFood[0].quantity=quantity;
    console.log(dataFood[0].quantity);
    console.log("posting data2");

    console.log("posting data3");
    $quantities.each(function(i,quantities){
    console.log("posting data4");
    var $quantityOrder = $(quantity);
    console.log("we are in updateOrderData");
    window.sessionStorage.setItem("quantity", JSON.stringify(quantityOrder));
    });

    });
}

$("#quantityButton").click(updateOrderData);