var values = ""

$(".button").on("click", (event) => {
    values += event.target.name
    $(".inputvalue").val(values)
})




$(".button-clear").on("click", (ev) => {
    location.reload()
})



$(".button-answer").on("click", (ev) => {
    try {
         $(".inputvalue").val(eval(values))
         values = eval(values)

    } catch (error) {

        if (error instanceof SyntaxError) {
            alert("Sytanx is incorrect. Try again")
            location.reload()
        }
    }

})
 


$(document).on("keydown",event=>{
    if(event.which){
        $(".button").click()
    }
    
    //console.log("key of " + event.which+ " is pressed")
})

