for( i=0; i < localStorage.length; i++ ) {
    $("#"+localStorage.key(i)+" .description").val(localStorage.getItem(localStorage.key(i)));
}

// When user clicks on the save icon, this records all entries associated to that div
$(".saveBtn").on("click", function() {
    
    var plan = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, plan)
});

// When user clicks on Clock icon, it forces page refresh

$(".refresh-icon").on("click", function () {
    //refreshes the page
    location.reload(true); 
    alert('Reloading Page. Any unsaved items will be deleted.');
});


//when user clicks on Calendar2 Check icon, it erases ALL. Maybe play with a "cancel" button

$(".check-icon").on("click", function()  {
    //Reresh page, then clear ALL
    location.reload(true);
    localStorage.clear();
    alert('Clearing schedule, ready to begin anew.') 
});


// Color-code the past, present, and future blocks 
function colorSchedule(){

    var now = moment().format("dddd, MMMM Do, YYYY");
    $('#currentDay').text(now);

    var currentTimeBlock = moment().hours();
    var clock = $(".time-block");

    for(i = 9; i < (clock.length + 9); i++ ) {
        var schedule = $("#hour-"+i);
        schedule.removeClass("past");
        schedule.removeClass("present");
        schedule.removeClass("future");

        if (currentTimeBlock == i) {
            schedule.addClass("present")

        } else if (currentTimeBlock > i) {
            schedule.addClass("past")

        } else {
            schedule.addClass("future")
        }
    }
};

colorSchedule();
// The page will refresh every 15 seconds:
var interval = setInterval(colorSchedule,15000);