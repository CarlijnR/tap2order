function menuItem()
{
    $.get("api/restaurant/menu/list", function(data){
        console.log("Checking this list");
        if (data.length<=0)
        {
            console.log("empty list");
            return;
        }
        var string="";
        for(var i=0; i<data.length;i++){
            console.log(data[i]);
            string += "<p>" + data[i].name + "- $" + data[i].price;

            //            for(var j=0; j<data[i].menuItemList.name;j++){
            //            console.log(data[i].menuItemList.name);
            //            console.log("New Item");
            //        }
            console.log("After");
        }
        $("#menu-page-show").html(string);
    });
}