//function getMenuItems() {
//    $.get("/api/menuItem/", function (data) {
//        if (data.length <= 0) {return;}
//        $('#menuItem').empty();
//        for (var i = 0; i < data.length; i++) {
//            $('#menuItem').append(
//            '<tr>' +
//                '<td>' + data[i].menuItemName + '</td>' +
//                '<td>' + data[i].menuItemPrice + '</td>' +
//            '<tr>'
//            );
//        }
//    });
//}
//
//function saveMenuItems(b) {
//    b.preventDefault();
//
//    var nameMI = $("#nameMenuItem").val();
//    var priceMI = $("#priceMenuItem").val();
//
//    $.post("/api/menuItem/add",{
//        menuItemName: nameMI,
//        menuItemPrice: priceMI
//      },
//    getMenuItems
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
//$("#saveMenuItem").submit(saveMenuItems);


function postData() {
    console.log("posting data...");

    // Get values from html.
    var name = $("#nameMenuItem").val();
    var price = $("#priceMenuItem").val();


    // Create JS object with data.
    var newFood = {
        menuItemName : name,
        menuItemPrice : price
    };
    console.log(newFood);

    // Convert JS object to JSON.
    var validJsonFood = JSON.stringify(newFood);
    console.log(validJsonFood);

    // Post JSON to endpoint.
    $.ajax({
        url:"/api/menuItem/add",
        type:"post",
        data: validJsonFood,
        contentType: "application/json",
        success: function(result) {
            // On successful post, reload data to get the added one as well.
            console.log("success post data!");
            getData();
        }
    });
}

function getData() {
    console.log("getting data...");

    // Get the data from endpoint.
    $.ajax({
        url:"/api/menuItem/",
        type:"get",
        success: function(foods) {
            // On successful get, reload the datatable with new data.
            console.log("This is the data: " + foods);
            $('#ingredients').DataTable().clear();
            $('#ingredients').DataTable().rows.add(ingredients);
            $('#ingredients').DataTable().columns.adjust().draw();
        }
    });
}

function setup() {
    // Modal submit.
    $("#saveFood").on('submit', function(e) {
        console.log("Submitted new menu item form");

<<<<<<< HEAD
=======
        // Post the data from the modal.
        postData();

        // Reset modal to hide and no values.
        $('#newFoodModal').modal('hide');
        $("#nameMenuItem").val("");
        $("#priceMenuItem").val("");
    });
>>>>>>> tableCarlijn

    // Load DataTable with data format.
    $('#foods').DataTable({
        columns: [
            { "data": "menuItemName" },
            { "data": "menuItemPrice" }
        ]
    });

    // Load first data.
    getData();
}
