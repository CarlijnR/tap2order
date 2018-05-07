function getDataFood() {

    console.log("getting data...");

    // Get the data from endpoint.
    $.ajax({
        url:"/api/menuItem/",
        type:"get",
        success: function(foods) {
            // On successful get, reload the datatable with new data.
            console.log("This is the data: " + foods);
            $('#menuItem').DataTable().clear();
            $('#menuItem').DataTable().rows.add(foods);
            $('#menuItem').DataTable().columns.adjust().draw();
        }
    });
}

    $(document).ready(function () {
        console.log("tadaafood");
          var events = $("#events");
          var table = $('#menuItem').DataTable({
                columns: [
                    { "data": "menuItemName" },
                    { "data": "menuItemPrice" }
                ],
                select:{ style: 'multi'},
            });

            table
                .on ('select.dt', function(e, type){
                    var rowData = table.rows('.selected').data().toArray();
                                console.log("enters rowData function");
                                events.prepend('<div><b>'+type+' selection</b> - '+JSON.stringify(rowData)+'</div>' );
                                console.log(rowData);
                            } )
                .on( 'deselect', function ( e, dt, type, indexes) {
                     console.log("enters .on function");
                     var rowData = table.rows(indexes).data().toArray();
                     events.prepend( '<div><b>'+type+' <i>de</i>selection</b> - '+JSON.stringify( rowData )+'</div>' );
                     console.log(rowData);
                    });
        getDataFood();
    });

//$.get("api/restaurant/menu/list/food", function(data){
//    for(var i=0; i < data.length;i++){
//        $('#foodlist').append(
//            '<tr>' +
//            '<td class="h5">' + data[i].name + '</td>' +
//            '<td>' +
//            '</td>' +
//            '<td><button class="btn btn-grey btn-sm mr-1">-</button>0<button class="btn btn-grey btn-sm ml-1">+</button></td>' +
//            '<td>' + data[i].price + '</td>' +
//            '</tr>'
//        );
//    }
//})

