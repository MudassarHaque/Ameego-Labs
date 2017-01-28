

function sendSms(message) {
    console.log("sms Send---> message = " + message);
    var no = 7007143466;
    $.ajax({
        url: 'https://smsgateway.me/api/v3/messages/send?',
        type: "GET",
        dataType: 'JSON',
        data: "message=" + message + "&&number=+91" + no + "&&email=rehan300@gmail.com&&password=ilovesmsgateway&&device=34962",

    });

    //    Toast Function goes here.(Query Submited.)
    //    Another Toast Function goes here.(Thanks for the interest.)
}


$('#queryForm').on('submit', function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var contact = $('#mobile').val();
    var message = $('#query').val();
    var subject =$('#subject').val();
    var CompliedMessage += "Query from " + name + "\n Contact Info : " + contact + "\n Email : " + email + "\n Subject : " + subject + "\n Message : "  + message;
    sendSms(CompliedMessage);
    //$('#jqueryForm').reset(); not working. and no line break b/w contact and email.

});



