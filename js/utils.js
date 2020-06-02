'use strict';

$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        var email = document.getElementById('form-email')
        var name = document.getElementById('form-name')
        var subject = document.getElementById('form-subject')
        var content = document.getElementById('form-content')

        if (!name.value || !email.value || !subject.value || !content.value) {
            sentSuccessfuly(false);
            return false;
        } else {
            $.ajax({
                method: 'POST',
                url: 'https://formspree.io/xbjzolwp',
                data: $('#contact-form').serialize(),
                datatype: 'json'
            });
            e.preventDefault();
            $(this).get(0).reset();
            sentSuccessfuly();
        }
    });
});

function sentSuccessfuly(sent = true) {
    $('#contact-form').hide();
    if (sent) $('.form-status').text('Messege Sent!');
    else $('.form-status').text('Check your entries...');
    setTimeout(function () {
        $('#contact-form').show();
        $('.form-status').text('');
    }, 2000)
}