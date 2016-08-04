/// <reference path="jquery.min.js" />

$(function () {
    setTimeout(function () {
        $('.animationList').removeClass('hidden');
    }, 500);
});

$(document).ready(function(){
    $('#hide1').hide();
        $('#rps-scrn-shots').click(function () {
                $('#hide1').toggle(500);
    });
})

$(document).ready(function () {
    $('#hide2').hide();
    $('#rps-scrn-shots2').click(function () {
        $('#hide2').toggle(500);
    });
})