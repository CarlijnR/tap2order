<<<<<<< HEAD
//function getMenuItems(){
//    $.get("/api/menuItem/", function(data){
//    if(data.length<=0){return;}
//    var html = "";
//    for(var i=0;i<data.length;i++){
//    html +="<p>" + data[i].menuItemName + " - " + data[i].menuItemPrice}
//    $("#menuItem").html(html);
//    });
//}
//
//function getDrinkItems(){
//    $.get("/api/drink/", function(data){
//    if(data.length<=0){return;}
//    var html = "";
//    for(var i=0;i<data.length;i++){
//    html +="<p>" + data[i].drinkName + " - " + data[i].drinkPrice}
//    $("#drinksText").html(html);
//    });
//}



//function printOrder(e)
//{
//e.preventDefault();
//        $.get("/api/restaurant/order/printOrder", function(data){
//        console.log("Enters this shit");
//        if (data.length<=0)
//        {
//           console.log("empty output");
//            return;
//        }
//        var string="";
//        for(var i=0; i<data.length;i++){
//            string += "<p>" + data[i] + "</p>";
//            console.log(data[i]);
////            for(var j=0; j<data[i].menuItemList.name;j++){
////            console.log(data[i].menuItemList.name);
////            console.log("New Item");
////        }
//        console.log("After");
//
//
//}
//});
//}
//
//function menuItem(b)
//{
//b.preventDefault();
//$.get("api/restaurant/menu/list", function(data){
//    console.log("Checking this list");
//            if (data.length<=0)
//            {
//               console.log("empty list");
//               return;
//            }
//            var string="";
//            for(var i=0; i<data.length;i++){
//            console.log(data[i]);
//                string += "<p>" + data[i].name + "- $" + data[i].price;
//
//    //            for(var j=0; j<data[i].menuItemList.name;j++){
//    //            console.log(data[i].menuItemList.name);
//    //            console.log("New Item");
//    //        }
//            console.log("After");
//            }
//            $("#menu-page-show").html(string);
//});
//}
//
//$("#foodbutton").click(menuItem);


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
          $('#menuItem').DataTable({
                columns: [
                    { "data": "menuItemName" },
                    { "data": "menuItemPrice" }
                ]
            });

        getDataFood();

    });
=======
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
>>>>>>> master
