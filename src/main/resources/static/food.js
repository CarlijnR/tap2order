$.get("api/restaurant/menu/list/food", function(data){
    for(var i=0; i < data.length;i++){
        $('#foodlist').append(
            '<tr>' +
            '<td class="h5">' + data[i].name + '</td>' +
            '<td>' + "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim." +
            '</td>' +
            '<td><button class="btn btn-grey btn-sm mr-1">-</button>0<button class="btn btn-grey btn-sm ml-1">+</button></td>' +
            '<td>' + data[i].price + '</td>' +
            '</tr>'
        );
    }
})