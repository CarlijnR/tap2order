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
        var events = $("#events");
        var table = $('#drinksText').DataTable({
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