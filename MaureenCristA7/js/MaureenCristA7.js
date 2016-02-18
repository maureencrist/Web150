$(document).ready(function(){

    //updating elements
    $('h1').html(function() {
       return '<em>' + $(this).text() + '</em>';
    });
    
    //inserting elements
    $('ul').before('<h2>Toffee Choices</h2>');
    $('li:last').after('<li>Chocolate Covered Pistachio Toffee</li>');
    
    //getting and setting attributes
    $('li:last').attr('id', 'four');
    $('li#four').addClass('chocolate');
    
    //inserting elements
    $('li').prepend('+ '); 
    $('li.nuts').append('<p>Note: This item is covered in nuts</p>');
    $('li.chocolate').append('<p>Note: This item is covered in chocolate</p>');

});