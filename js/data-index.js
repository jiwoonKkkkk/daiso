document.ready(function ())
    ('.control_button').each(function (index)) {
        (this).attr('data-index', index);
    }
               
document.ready(function(){
    function movieSlider(index){
        
    }
    (this).attr('data-index',index);}).
    click(function(){
        var index = (this).attr('data-index');
        moveSlider(index);
        
    });
var randomNumber = math.round(Math.random()*4);
moveSlider(randomNumber);


});

Function moveSlider(index){
    var willMoveLeft = -(index*600);
    ('.slider_panel').animate({left:willMoveLeft},'slow');
    ('.control_button[data-index=' + index + ']').addClass('active');
    ('.control_button[data-index!=' + index + ']').removeClass('active');
}
