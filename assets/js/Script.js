/// <reference path="jquery.min.js" />

$(function () {
    setTimeout(function () {
        $('.animationList').removeClass('hidden');
    }, 500);
});

$(document).ready(function(){
    $('#hideTest').hide();
        $('#rps-scrn-shots').click(function () {
                $('#hideTest').toggle(300);
    });
})