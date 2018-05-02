function getMenuItems(){
    $.get("/api/menuItem/", function(data){
    if(data.length<=0){return;}
    var html = "";
    for(var i=0;i<data.length;i++){
    html +="<p>" + data[i].menuItemName + " - " + data[i].menuItemPrice}
    $("#menuItem").html(html);
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