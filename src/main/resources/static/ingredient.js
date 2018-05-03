// function getIngredients(){
//     $.get("/api/ingredient/", function(data){
//         if(data.length<=0){return;}
//         $('#ingredients').empty();
//         for(var i=0;i<data.length;i++) {
//             $('#ingredients').append(
//             '<tr>' +
//                 '<td>' + data[i].ingredientName + '</td>' +
//                 '<td>' + data[i].ingredientGrams + '</td>' +
//                 '<td>' + data[i].ingredientPrice + '</td>' +
//             '<tr>'
//             );
//         }
//     });
// }
//
// function saveIngredients(e) {
//     e.preventDefault();
//
//     var name = $("#name").val();
//     var grams = $("#grams").val();
//     var price = $("#price").val();
//
//     $.post("/api/ingredient/add",{
//         ingredientName: name,
//         ingredientGrams: grams,
//         ingredientPrice: price
//       },
//     getIngredients
//     )
// };
//
//
// $("#saveForm").submit(saveIngredients);
// getIngredients

function postData() {
    console.log("posting data...");

    // Get values from html.
    var name = $("#name").val();
    var grams = $("#grams").val();
    var price = $("#price").val();


    // Create JS object with data.
    var newIngredient = {
        ingredientName : name,
        ingredientGrams : grams,
        ingredientPrice: price
    };
    console.log(newIngredient);

    // Convert JS object to JSON.
    var validJsonIngredient = JSON.stringify(newIngredient);
    console.log(validJsonIngredient);

    // Post JSON to endpoint.
    $.ajax({
        url:"/api/ingredient/add",
        type:"post",
        data: validJsonIngredient,
        contentType: "application/json",
        success: function(result) {
            // On successful post, reload data to get the added one as well.
            console.log("success post data!");
            getData();
        }
    });
}

function getData() {
    console.log("getting data...");

    // Get the data from endpoint.
    $.ajax({
        url:"/api/ingredient/",
        type:"get",
        success: function(ingredients) {
            // On successful get, reload the datatable with new data.
            console.log("This is the data: " + ingredients);
            $('#ingredients').DataTable().clear();
            $('#ingredients').DataTable().rows.add(ingredients);
            $('#ingredients').DataTable().columns.adjust().draw();
        }
    });
}

function setup() {
    // Modal submit.
    $("#saveForm").on('submit', function(e) {
        console.log("Submitted new ingredient form");

        // Post the data from the modal.
        postData();

        // Reset modal to hide and no values.
        $('#newIngredientModal').modal('hide');
        $("#name").val("");
        $("#grams").val("");
        $("#price").val("");
    });

    // Load DataTable with data format.
    $('#ingredients').DataTable({
        columns: [
            { "data": "ingredientName" },
            { "data": "ingredientGrams" },
            { "data": "ingredientPrice" }
        ]
    });

    // Load first data.
    getData();
}

