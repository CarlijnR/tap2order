 $(document).ready(function (){
 var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));

 console.log("Order:", dataFood);

 var dataDrink = JSON.parse(window.sessionStorage.getItem("drinkOrderData"));

 console.log("Order:", dataDrink);

 console.log("enters function");
        if (dataFood !== null && dataFood!==""){
        for(var i=0; i < dataFood.length; i++){
        if(dataFood[i]!==null){
        $('#table').append(
            '<tr>' +
            '<td class="h5">' + dataFood[i].menuItemName + '</td>' +
            '<td>' + dataFood[i].menuItemPrice + '</td>' +
            '<td>' + '<input min="1" value = "1" class="form-control col-md-4" type="number" placeholder="(quantity)" name="dataFood['+i+'].quantity" id="quantity'+i+'">' + '</td>' +
            '</tr>'
        );}
        };
        }
        if(dataDrink !== null && dataDrink!==""){
        for(var i=0; i < dataDrink.length; i++){
        if(dataDrink[i]!==null){
        $('#table').append(
            '<tr>' +
            '<td class="h5">' + dataDrink[i].drinkName + '</td>' +
            '<td>' + dataDrink[i].drinkPrice + '</td>' +
            '<td>' + '<input min ="1" value="1" class="form-control col-md-4" type="number" placeholder="(quantity)" name="dataDrink['+i+'].quantity" id="quantity1'+i+'">' + '</td>' +
            '</tr>'
        );}
        };
        }
})

function updateOrderDataFood() {
    var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));
    if(dataFood !== null){
    for (var i=0; i<dataFood.length; i++){
    if(dataFood[i]!==null){
        var quantityFood = $('#quantity'+i+'').val();
         console.log(quantityFood);
        if (quantityFood < 1 || quantityFood > 15) {
            alert("Please input any number above 0");
            return;
        }
        else {
        dataFood[i].quantity=quantityFood;
        console.log(dataFood);
        window.sessionStorage.setItem("foodOrderData", JSON.stringify(dataFood));
        updateOrderDataDrink();
        }
    }
    else
    updateOrderDataDrink();}
    }
    else{
    updateOrderDataDrink();}
}

function updateOrderDataDrink(){
    var dataDrink = JSON.parse(window.sessionStorage.getItem("drinkOrderData"));
    if(dataDrink !== null){
    for (var i=0; i<dataDrink.length; i++){
    if(dataDrink[i]!==null){
    var quantity1 = $('#quantity1'+i+'').val();
    console.log(quantity1);
                        if (quantity1 < 1 || quantity1 > 15) {
                            alert("Please input any number above 0");
                            return;
                        }
                        else {

                            dataDrink[i].quantity=quantity1;
                            console.log(dataDrink);
                            window.sessionStorage.setItem("drinkOrderData", JSON.stringify(dataDrink));
                            window.location.href="finalOrder.html";
                        }
                    }
}
}
window.location.href="finalOrder.html";
}
$("#quantityButton").click(updateOrderDataFood);
