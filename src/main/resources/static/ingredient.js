function getIngredients(){
    $.get("/api/ingredient/", function(data){
    if(data.length<=0){return;}
    var html = "";
    for(var i=0;i<data.length;i++){
    html +="<p>" + data[i].ingredientName + " - " + data[i].ingredientGrams + " - " + data[i].ingredientPrice}
    $("#ingredients").html(html);
    });
}

function saveIngredients(e) {
    e.preventDefault();

    var name = $("#name").val();
    var grams = $("#grams").val();
    var price = $("#price").val();

    $.post("/api/ingredient/add",{
        ingredientName: name,
        ingredientGrams: grams,
        ingredientPrice: price
      },
    getIngredients
    )
};

$("#saveForm").submit(saveIngredients);
getIngredients();