$(document).ready(function() {
    
    var click = 0;
    var slide = 0;
    var theme = 0;

    $('td').addClass('ab');

    $('th').click(function(){
        var index = $(this).attr('class');
        index = index.split('')[0];
        if ($('td:nth-child('+index+')').attr('class').split(' ')[1] === 'bg-dark'){
            $('td:nth-child('+index+')').removeClass('bg-dark');}
        else{
            $('td:nth-child('+index+')').addClass('bg-dark');
        }
        console.log(index);
    });

    $('a').click(function() {
        alert('You are now leaving this page!');
    });

    $('#2head').click(function() {
        var head = $('#2head').html();
        $('#2head').html('<h1 id="2head"> Name? '+head+'</h1>');
        console.log('failure');
    });

    $('#show').click(function() {
        $('p.pushitout').toggle();
    });

    $('#show2').click(function() {
        if (slide === 0) {
            slide = 1;
            $('p.pushitout2').fadeOut('');
            console.log(slide);
        } else {
            slide = 0;
            $('p.pushitout2').fadeIn('');
            console.log(slide);
        }
    });
    
    $('#show3').hover(function() {
        alert("Don't hover there");
    });

    $('#show4').click(function() {
        // $('#pushitout').slideToggle();
        if (slide === 0){
            slide = 1;
            $('div.slides').slideUp();
        } else {
            slide = 0;
            $('div.slides').slideDown();
        }
    });

    $('#show5').click(function() {
        $('p.spam').after('<p>spam</p>');
    });
    var gen = 0;
    $('input').click(function(){
        gen++;
        $('p.spam').before('<p>'+gen+'</p>');
        $('p.spam').append($(this).val()+' ');
        console.log($(this).val());
    });

    $('#theme').click(function() {
        // $('#pushitout').slideToggle();
        if (theme === 0) {
            theme = 1;
            $('#theme').text('Change it back.');
            $('p, h1, th, td, label').addClass('text-light');
            $('p.theme').text('This is Dark.');
            $('body').addClass('bg-dark');
            console.log(theme);
        } else {
            theme = 0;
            $('#theme').text('I like it dark.');
            $('p, h1, th, td, label').removeClass('text-light');
            $('p.theme').text('This is Light.');
            $('body').removeClass('bg-dark');
            console.log(theme);
            console.log($('p.theme').attr('html'));
        }
    });


});