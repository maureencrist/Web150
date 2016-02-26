$(document).ready(function(){
    
    //event handler to show details of item when mouseover and mouseout
    $('li').on('click', function() {
        $(this).next().slideToggle(500);
    })
    
    //.css() method to select and update element properties
    $('li').css({
        'cursor': 'pointer',
        'listStyleType': 'none'
    });
    
    //.each() to update multiple elements
    $('li').each(function() {
        $(this).prepend('+ ');  
    });
    
    //animate at least 1 element on the page      
    $('#logo').animate({
        opacity: 1,
        marginLeft: '+=200',
    }, 700, function() {
    });
    
    //use effects with at least 1 element on the page
    
    var $li = $('li');
    $li.hide().each(function(index){
        $(this).delay(700 * index).fadeIn(700);
    });
 
});