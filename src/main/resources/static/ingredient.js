function getIngredients(){
    $.get("/api/ingredient/", function(data){
        if(data.length<=0){return;}
        $('#ingredients').empty();
        for(var i=0;i<data.length;i++) {
            $('#ingredients').append(
            '<tr>' +
                '<td>' + data[i].ingredientName + '</td>' +
                '<td>' + data[i].ingredientGrams + '</td>' +
                '<td>' + data[i].ingredientPrice + '</td>' +
            '<tr>'
            );
        }
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
getIngredients
