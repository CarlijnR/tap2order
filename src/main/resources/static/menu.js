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