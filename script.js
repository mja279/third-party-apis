for( i=0; i < localStorage.length; i++ ) {
    $("#"+localStorage.key(i)+" .description").val(localStorage.getItem(localStorage.key(i)));
}
colorSchedule();
// The page will refresh every 15 seconds:
var interval = setInterval(colorSchedule,15000);

$(".saveBtn").on("click", function() {
    // get text from corresponding div and save it to global var "value" 
    var value = $(this).siblings(".description").val();
    // get id attribute associated with the div containing the text and save it to global var "time" 
    var time = $(this).parent().attr("id");
    // save the text in "value" to localStorage using "time" as the key
    localStorage.setItem(time, value)
});
// create a save all button, and a clear all button
function colorSchedule(){
    var currentTimeBlock = moment().hours();
    for( i = 9; i < ($(".time-block").length + 9) ; i++ ) {
        var ths = $("#hour-"+i);
        ths.removeClass("past")
        ths.removeClass("present")
        ths.removeClass("future")
        if (currentTimeBlock == i) {
            ths.addClass("present")
        } else if (currentTimeBlock > i) {
            ths.addClass("past")
        } else {
            ths.addClass("future")
        }
    }
}