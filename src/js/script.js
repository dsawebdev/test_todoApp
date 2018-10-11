// //Check off specific todos by clicking
$('ul').on('click', 'li', function (e) {
    $(this).toggleClass('completed');
});

//Click on X to delete Todos
$('ul').on('click', 'span', function (e) { 
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });    
    e.stopPropagation();
});

$('input[type=text]').keypress(function (e) { 
    if(e.which === 13){
        //grabbing todo from input
        todoText = $(this).val()
        //clear the input field after inputting new todo.
        $(this).val("");
        //create new 'li' from input and add to ul
        $('ul').append('<Li><span><i class="fa fa-trash"></i></span> '+ todoText + '</li>')
    }
});

$('.faCircle').on('click', 'i', function (e) {
    $('input[type=text]').fadeToggle();
});