function getMenuItems() {
    $.get("/api/menuItem/", function (data) {
        if (data.length <= 0) {return;}
        $('#menuItem').empty();
        for (var i = 0; i < data.length; i++) {
            $('#menuItem').append(
            '<tr>' +
<<<<<<< HEAD
            '<td class="h5">' + data[i].name + '</td>' +
            '<td>' + "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim." +
            '</td>' +
            '<td><button class="btn btn-grey btn-sm mr-1">-</button>0<button class="btn btn-grey btn-sm ml-1">+</button></td>' +
            '<td>' + data[i].price + '</td>' +
            '</tr>'
        );
    }
})
=======
                '<td>' + data[i].menuItemName + '</td>' +
                '<td>' + data[i].menuItemPrice + '</td>' +
            '<tr>'
            );
        }
    });
}

function saveMenuItems(b) {
    b.preventDefault();

    var nameMI = $("#nameMenuItem").val();
    var priceMI = $("#priceMenuItem").val();

    $.post("/api/menuItem/add",{
        menuItemName: nameMI,
        menuItemPrice: priceMI
      },
    getMenuItems
    )
};

//function removeIngredient(){
//    $.get("/api/ingredient/remove/{id}", function(data){
//        if(data.length<=0){return;}
//        var html = "";
//        for(var i=0;i<data.length;i++){
//        html +="<p>" + data[i].ingredientId;
//        data[i].ingredientId = id;
//    },)};


$("#saveMenuItem").submit(saveMenuItems);
>>>>>>> tableCarlijn
