$(document).ready(function (){

 var dataFood = JSON.parse(window.sessionStorage.getItem("foodOrderData"));
 var tip = JSON.parse(window.sessionStorage.getItem("tip"));
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
            '<td>' + dataFood[i].quantity + '</td>' +
            '<td>' + dataFood[i].menuItemPrice*dataFood[i].quantity + '</td>' +
            '</tr>'
        );}
        }}
               if(dataDrink !== null && dataDrink!==""){
               for(var i=0; i < dataDrink.length; i++){
               if(dataDrink[i]!==null){

                $('#table').append(
                    '<tr>' +
                    '<td class="h5">' + dataDrink[i].drinkName + '</td>' +
                    '<td>' + dataDrink[i].drinkPrice + '</td>' +
                    '<td>' + dataDrink[i].quantity + '</td>' +
                    '<td>' + dataDrink[i].drinkPrice*dataDrink[i].quantity + '</td>' +
                    '</tr>'
        );}
        }}
        var finalPrice = JSON.parse(window.sessionStorage.getItem("totalPrice"));
        var VAT = (finalPrice)*(0.21)
        if(tip>=0)
        {
        $('#totalPrice').html("Total: &euro;"+(finalPrice+ +tip));
        $('#VAT').html("VAT (21%): &euro;"+VAT);
        }
        else
        {
                $('#totalPrice').html("Total: &euro;"+(finalPrice));
                $('#VAT').html("VAT (21%): &euro;"+VAT);
        }
})




