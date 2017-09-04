









/*$(document).ready(function ()   {

    $("#submit_button").click(function() {
        var name = $("#name_input").val();
        var email = $("#mail_input").val();
        var message = $("#message_input").val();
        //var contact = $("#contact").val();
        $("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
        if (name == '' || email == '') {
            alert("Please Fill Required Fields");
        } else {
// Returns successful data submission message when the entered information is stored in database.
            $.post("contactForm.php", {
                name1: name,
                email1: email,
                message1: message,
                //contact1: contact
            }, function(data) {
                $("#returnmessage").append(data); // Append returned message to message paragraph.
                if (data == "Your Query has been received, We will contact you soon.") {
                    $("#form")[0].reset(); // To reset form fields on success.
                }
            });
        }
    });

});*/