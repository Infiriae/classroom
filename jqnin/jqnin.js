$(document).ready(function() {

    $('div.col').append('<img src="pin.jpg" alt="Pins.">');
    $('div.col').addClass('m-2 p-2')
    
    $('img').click(function(){
        $(this).hide();
    });

    $('#res').click(function(){
        $('img').show();
    });


});