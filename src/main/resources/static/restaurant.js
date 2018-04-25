function order()
{
$.get("/api/restaurant/order/print",function(data){
    alert(data);
})
}
function ingredient(e)
{
e.preventDefault();
        $.get("/api/restaurant/ingredient/list", function(data){
        console.log("Enters this shit");
        var string="";
        for(var i=0; i<data.length;i++){
            string += data[i].ingredientName
        }
        alert(data);
});
}


$("#print").click(ingredient);