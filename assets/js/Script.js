/// <reference path="jquery.min.js" />

$(function () {
    setTimeout(function () {
        $('.animationList').removeClass('hidden');
    }, 500);
});

function showRPS() {
    $('#rps').fadeOut(50, function () {
        $('#rps').attr("src", 'images/RPS-menu-scrn-pic.jpg');
    }).slideDown(900);
}
function hideRPS() {
    $('#rps').slideUp(600, function () {
        $('#rps').attr("src", '');
    }).fadeOut(100);
}
function showRPS2() {
    $('#rps2').fadeOut(50, function () {
        $('#rps2').attr("src", 'images/RPS-vs-scrn-pic.jpg');
    }).slideDown(900);
}
function hideRPS2() {
    $('#rps2').slideUp(600, function () {
        $('#rps2').attr("src", '');
    }).fadeOut(100);
}
