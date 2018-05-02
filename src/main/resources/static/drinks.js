function getDrinkItems(){
    $.get("/api/drink/", function(data){
    if(data.length<=0){return;}
    var html = "";
    for(var i=0;i<data.length;i++){
    html +="<p>" + data[i].drinkName + " - " + data[i].drinkPrice}
    $("#drinksText").html(html);
    });
}

function saveDrinkItems(b) {
    b.preventDefault();

    var nameDrink = $("#nameDrink").val();
    var priceDrink = $("#priceDrink").val();

    $.post("/api/drink/add",{
        drinkName: nameDrink,
        drinkPrice: priceDrink
      },
    getDrinkItems
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


$("#saveDrink").submit(saveDrinkItems);


//$("drinkbutton").click(getDrinkItems);
