 $(document).ready(function(){
 mainFunction();
 })

 function mainFunction (){
 //$('#table td').empty();
 var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));

 console.log("Order:", dataFood);

 var dataDrink = JSON.parse(window.sessionStorage.getItem("drinkOrderData"));

 console.log("Order:", dataDrink);

 console.log("enters function");
    if(dataFood !== null && dataFood!==""){
    for(var i=0; i < dataFood.length; i++){
    if(dataFood[i]!==null)
    {

        $('#table').append(
            '<tr id="food'+i+'">' +
            '<td class="h5">' + dataFood[i].menuItemName + '</td>' +
            '<td>' + dataFood[i].menuItemPrice + '</td>' +
            '<td>' + dataFood[i].quantity + '</td>' +
            '<td>' + '<button type="button" name="button['+i+']" id="buttonFood'+i+'" onclick="removeFood('+i+')">' + 'Remove' + '</button>' + '</td>' +
            '</tr>'
        );
    }
        }
        }

        if(dataDrink !== null && dataDrink !==""){
        for(var i=0; i < dataDrink.length; i++){
        if(dataDrink[i]!==null){
                $('#table').append(
                    '<tr id="drink'+i+'">' +
                    '<td class="h5">' + dataDrink[i].drinkName + '</td>' +
                    '<td>' + dataDrink[i].drinkPrice + '</td>' +
                    '<td>' + dataDrink[i].quantity + '</td>' +
                    '<td>' + '<button type="button" name="button['+i+']" id="buttonDrink'+i+'" onclick="removeDrink('+i+')">' + 'Remove' + '</button>' + '</td>' +
                    '</tr>'
                );
                }
        }
        }
        calculatePrice();
        };

function calculatePrice(){
var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));
var dataDrink = JSON.parse(window.sessionStorage.getItem("drinkOrderData"));
var totalPrice=0;
if(dataFood !== null){
for(var i=0; i < dataFood.length; i++){
if(dataFood[i]!==null){
totalPrice = totalPrice + (dataFood[i].menuItemPrice*dataFood[i].quantity);}
}
}
if(dataDrink !== null){
for(var i=0; i < dataDrink.length; i++){
if(dataDrink[i]!==null){
totalPrice = totalPrice + (dataDrink[i].drinkPrice*dataDrink[i].quantity);
console.log(totalPrice);}
}
}
$('#totalPrice').html("Total: &euro; "+totalPrice);
window.sessionStorage.setItem("totalPrice", totalPrice);
}

function removeFood(i){
var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));
//var temporary = Number(dataFood[i].quantity);
if (dataFood[i].quantity>1)
{
    dataFood[i].quantity=dataFood[i].quantity-1;
    calculatePrice();
    window.sessionStorage.setItem("foodOrderData", JSON.stringify(dataFood));
    $('#table tbody').empty();
    mainFunction();
}
else{
$("#food"+i).remove();
var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));
delete dataFood[i];
window.sessionStorage.setItem("foodOrderData", JSON.stringify(dataFood));
calculatePrice();
}
}

function removeDrink(i){
var dataDrink = JSON.parse(window.sessionStorage.getItem("drinkOrderData"));
if(dataDrink[i].quantity>1)
{
dataDrink[i].quantity=dataDrink[i].quantity-1;
    calculatePrice();
    window.sessionStorage.setItem("drinkOrderData", JSON.stringify(dataDrink));
    $('#table tbody').empty();
    mainFunction();
}
else{
$("#drink"+i).remove();
var dataDrink = JSON.parse(window.sessionStorage.getItem("drinkOrderData"));
delete dataDrink[i];
window.sessionStorage.setItem("drinkOrderData", JSON.stringify(dataDrink));
calculatePrice();
}
}

//
//$.each(dataFood, function(key, value){
//    if (value === "" || value === null){
//        delete dataFood[key];
//    }
////    window.sessionStorage.setItem("foodOrderData", JSON.stringify(dataFood));
////
//});
//Object.keys(dataFood).forEach(function(i) {
//});


//var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));
//
//var totalPrice=0;
//if(dataFood !== null){
//for(var i=0; i < dataFood.length; i++){
//totalPrice = totalPrice + (dataFood[i].menuItemPrice*dataFood[i].quantity);
//}}


//var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));
//dataFood.splice(i,1);
//}
//console.log("Before" + i);
////i=i+1;
//console.log("After" + i);
////$(this).closest('tr').remove();
////document.getElementById("table").deleteRow(i);
//    var row = document.getElementById("table");
//    row.deleteRow(i);
//}

//function updateOrderData() {
//    var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));
//    for (var i=0; i<dataFood.length; i++){
//    var quantity = $('#quantity'+i+'').val();
//    dataFood[i].quantity=quantity;
//    };
//    console.log(dataFood);
//    window.sessionStorage.setItem("foodOrderData", JSON.stringify(dataFood));
//}

function getTip(){
var tip = $('#tip').val();
window.sessionStorage.setItem("tip", tip);
window.location.href="receipt.html";
}

$("#paymentButton").click(getTip);