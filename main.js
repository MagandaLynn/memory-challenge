$(function(){
//    $('#loginModal').modal('show');
    $('#statsButton').click(function(){
        $('#statsModal').modal('show');
    });
    $('#helpButton').click(function(){
        $('#helpModal').modal('show');
    });
    $('#settingsButton').click(function(){
        $('#settingsModal').modal('show');
    });
    $('#learnMoreLink').click(function(){
        $('#learnMoreModal').modal('show');
    });
    $('#registerButton').click(function(){
        $('#registerModal').modal('show');
    });
    $('#login-submit').click(function(){
        window.location.href='landing.html';  
    });
});