$.get("api/restaurant/menu/list/drinks", function(data){
    for(var i=0; i < data.length;i++){
        $('#drinklist').append(
            '<tr>' +
            '<td>' + data[i].name + '</td>' +
            '<td>' + data[i].price + '</td>' +
            '<td><button class="btn bg-warning">Order item</button></td>' +
            '</tr>'
        );
    }
})