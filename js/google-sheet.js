// Variable to hold request
var request;

// Bind to the submit event of our form
$(function(){


    var answers=getAns().split(" ");

    // Abort any pending request
    if (request) {
        request.abort();
    }

    document.getElementById("q1").value=answers[0];
    document.getElementById("q2").value=answers[1];
    document.getElementById("q3").value=answers[2];
    document.getElementById("q4").value=answers[3];
    document.getElementById("q5").value=answers[4];
    document.getElementById("q6").value=answers[5];
    document.getElementById("q7").value=answers[6];
    document.getElementById("q8").value=answers[7];
    document.getElementById("q9").value=answers[8];
    document.getElementById("q10").value=answers[9];

    // setup some local variables
    var $form = $("#scores");

    // Let's select and cache all the fields
    var $inputs = $form.find("input");



    // Serialize the data in the form
    var serializedData = $form.serialize();

    console.log(serializedData);

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycbwOYrBYv5BDD1CkvmZUeEl3UMCkcUSFSShxy3IhEy3zjJ9Uduw/exec",
        type: "post",
        data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
        console.log(response.error);
    });

    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    //event.preventDefault();
});