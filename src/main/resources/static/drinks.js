//function getDrinkItems() {
//    $.get("/api/drink/", function (data) {
//        if (data.length <= 0) {return;}
//        $('#drinksText').empty();
//        for (var i = 0; i < data.length; i++) {
//            $('#drinksText').append(
//                '<tr>' +
//                '<td>' + data[i].drinkName + '</td>' +
//                '<td>' + data[i].drinkPrice + '</td>' +
//                '<tr>'
//            );
//        }
//    });
//}
//
//// function getDrinkItems() {
////     $.get("/api/drink/", function (data) {
////         if (data.length <= 0) {return;}
////         $('#drinksText').empty();
////         for (var i = 0; i < data.length; i++) {
////             $('#drinksText').DataTable(
////                 '<tr>' +
////                 '<td>' + data[i].drinkName + '</td>' +
////                 '<td>' + data[i].drinkPrice + '</td>' +
////                 '<tr>'
////             );
////         }
////     });
//// }
//
//
//
//function saveDrinkItems(b) {
//    b.preventDefault();
//
//    var nameDrink = $("#nameDrink").val();
//    var priceDrink = $("#priceDrink").val();
//
//    $.post("/api/drink/add",{
//        drinkName: nameDrink,
//        drinkPrice: priceDrink
//      },
//    getDrinkItems
//    )
//};
//
////function removeIngredient(){
////    $.get("/api/ingredient/remove/{id}", function(data){
////        if(data.length<=0){return;}
////        var html = "";
////        for(var i=0;i<data.length;i++){
////        html +="<p>" + data[i].ingredientId;
////        data[i].ingredientId = id;
////    },)};
//
//
//$("#saveDrink").submit(saveDrinkItems);

//
//
////$("drinkbutton").click(getDrinkItems);




function postData() {
    console.log("posting data...");

    // Get values from html.
    var name = $("#nameDrink").val();
    var price = $("#priceDrink").val();


    // Create JS object with data.
    var newDrink = {
        drinkName : name,
        drinkPrice : price
    };
    console.log(newDrink);

    // Convert JS object to JSON.
    var validJsonDrink = JSON.stringify(newDrink);
    console.log(validJsonDrink);

    // Post JSON to endpoint.
    $.ajax({
        url:"/api/drink/add",
        type:"post",
        data: validJsonDrink,
        contentType: "application/json",
        success: function(result) {
            // On successful post, reload data to get the added one as well.
            console.log("success post data!");
            getData();
        }
    });
}

function getData() {
function getDrinkData() {
    console.log("getting data...");

    // Get the data from endpoint.
    $.ajax({
        url:"/api/drink/",
        type:"get",
        success: function(drinks) {
            // On successful get, reload the datatable with new data.
            console.log("This is the data: " + drinks);
            $('#drinks').DataTable().clear();

            $('#drinks').DataTable().rows.add(drinks);

            $('#drinks').DataTable().rows.add(ingredients);

            $('#drinks').DataTable().columns.adjust().draw();
            $('#drinksText').DataTable().clear();
            $('#drinksText').DataTable().rows.add(drinks);
            $('#drinksText').DataTable().columns.adjust().draw();
        }
    });
}

<<<<<<< HEAD

function setup() {

    // Load DataTable with data format.
    $('#ingredients').DataTable({


function setup() {
    // Modal submit.
    $("#saveDrink").on('submit', function(e) {
        console.log("Submitted new menu item form");

        // Post the data from the modal.
        postData();

        // Reset modal to hide and no values.
        $('#newDrinkModal').modal('hide');
        $("#nameDrink").val("");
        $("#priceDrink").val("");
    });

    // Load DataTable with data format.
    $('#drinks').DataTable({

=======
$(document).ready(function () {
        console.log("tadaadrinks");
        var events = $("#events");
        var table = $('#drinksText').DataTable({
>>>>>>> tableCarlijn
        columns: [
            { "data": "drinkName" },
            { "data": "drinkPrice" }
        ],
        select:{ style: 'multi'},
        });

        table
                        .on ('select.dt', function(e, type){
                            var rowDataDrink = table.rows('.selected').data().toArray();
                                        console.log("enters rowData function");
                                        events.prepend('<div><b>'+type+' selection</b> - '+JSON.stringify(rowDataDrink)+'</div>' );
                                        console.log(rowDataDrink);
                                        window.sessionStorage.setItem("drinkOrderData", JSON.stringify(rowDataDrink));
                                    } )
                        .on( 'deselect', function ( e, dt, type, indexes) {
                             console.log("enters .on function");
                             var rowDataDrink = table.rows(indexes).data().toArray();
                             events.prepend( '<div><b>'+type+' <i>de</i>selection</b> - '+JSON.stringify(rowDataDrink)+'</div>' );
                             console.log(rowDataDrink);
                            });

    // Load first data.
    getDrinkData();

});