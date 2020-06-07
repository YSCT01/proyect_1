//-----------------------------------------------------------

$(document).ready(function() {
    // Clock


    setInterval(function() {
        var clock = moment().format("h:mm:ss");
        $("#clock").html(clock);
    }, 1000);


});