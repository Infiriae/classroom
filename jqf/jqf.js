$(document).ready(function() {
    
    var click = 0;

    $('td').addClass('ab');
    
    $('th').click(function(){
        var index = $(this).attr('class');
        index = index.split('')[0];
        if ($('first:td:nth-child('+index+')').attr('class').split(' ')[1] === 'bg-dark'){
            $('first:td:nth-child('+index+')').removeClass('bg-dark');}
        else{
            $('first:td:nth-child('+index+')').addClass('bg-dark');
        }
        console.log(index);
    });

    $('a').click(function() {
        alert('You are now leaving this page!');
    });

    $('#you').click(function() {
        $('#Uname').text('Name?');
        console.log('failure');
    });

    $('#show1').click(function() {
        $('p.thing').show();
    });

    $('#show2').click(function() {
        // $('#pushitout').slideToggle();
        if (slide === 0) {
            slide = 1;
            $('#pushitout').hide('');
            $('#pushitout2').fadeOut('');
            console.log(slide);
        } else {
            slide = 0;
            $('#pushitout').show('');
            $('#pushitout2').fadeIn('');
            console.log(slide);
        }
    });

    $('#theme').click(function() {
        // $('#pushitout').slideToggle();
        if (theme === 0) {
            theme = 1;
            $('#theme').text('No change it back.');
            $('p, h1').addClass('text-light');
            $('body').removeClass('bg-info');
            $('body').addClass('bg-dark');
            console.log(theme);
        } else {
            theme = 0;
            $('#theme').text('Nevermind. I like it dark.');
            $('p, h1').removeClass('text-light');
            $('body').removeClass('bg-dark');
            $('body').addClass('bg-info');
            console.log(theme);
        }
    });


});