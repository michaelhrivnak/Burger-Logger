// jquery code goes here
$(function (){
    $(".btnDevour").on('click', function(e){
        let id = $(this).data("id");
        $.ajax(`/api/burger/${id}`,{
            type:"PUT"
            
        }).then(res=>{
            console.log("eaten successfully");
            location.reload(true);
        });
    });

    $("#addBurgerForm").on("submit", function (e){
        e.preventDefault();

        let newBurgerName = $("#newBurgerInput").val().trim();
        if (newBurgerName == null || newBurgerName === ""){
            return;
        }
        $.ajax(`/api/add`,{
            type:"POST",
            data: {burger_name:newBurgerName}
        }).then((res)=>{
            console.log("new burger added");
            location.reload(true);
        });

    });

});