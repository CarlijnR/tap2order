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

function postDataDrink() {
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
        success: function(result3) {
            // On successful post, reload data to get the added one as well.
            console.log("success post data!");
            getDataDrink();
        }
    });
}

function getDataDrink() {
    console.log("getting data...");

    // Get the data from endpoint.
    $.ajax({
        url:"/api/drink/",
        type:"get",
        success: function(drinks) {
            // On successful get, reload the datatable with new data.
            console.log("This is the data: " + drinks);
            $('#drinksText').DataTable().clear();
            $('#drinksText').DataTable().rows.add(drinks);
            $('#drinksText').DataTable().columns.adjust().draw();
        }
    });
}

function setupDrink() {
    // Modal submit.


    $("#saveDrink").on('submit', function(e) {
        console.log("Submitted new menu item form");

        // Post the data from the modal.
        postDataDrink();

        // Reset modal to hide and no values.
        $('#newDrinkModal').modal('hide');
        $("#name").val("");
        $("#price").val("");
    });


    // Load DataTable with data format.
    $('#drinksText').DataTable({
        columns: [
            { "data": "drinkName" },
            { "data": "drinkPrice" }
        ]
    });

    // Load first data.
    getDataDrink();
}