for( i=0; i < localStorage.length; i++ ) {
    $("#"+localStorage.key(i)+" .description").val(localStorage.getItem(localStorage.key(i)));
}
colorSchedule();
// The page will refresh every 15 seconds:
var interval = setInterval(colorSchedule,15000);


// When user clicks on the save icon, this records all entries associated to that div
$(".saveBtn").on("click", function() {
    
    var plan = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, plan)
});
// Color-code the past, present, and future blocks 
function colorSchedule(){
    var currentTimeBlock = moment().hours();
    var clock = $(".time-block")

    for( i = 9; i < (clock.length + 9) ; i++ ) {
        var schedule = $("#hour-"+i);
        schedule.removeClass("past")
        schedule.removeClass("present")
        schedule.removeClass("future")

        if (currentTimeBlock == i) {
            schedule.addClass("present")

        } else if (currentTimeBlock > i) {
            schedule.addClass("past")

        } else {
            schedule.addClass("future")
        }
    }
};