function getDrinkData() {
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

$(document).ready(function () {
        console.log("tadaadrinks");
        $('#drinksText').DataTable({
        columns: [
            { "data": "drinkName" },
            { "data": "drinkPrice" }
        ]
        });

    // Load first data.
    getDrinkData();

});