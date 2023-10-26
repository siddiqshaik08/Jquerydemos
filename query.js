$(document).ready(function(){
$("p").click(function(){
    $(this).hide();
});
});

$(document).ready(function(){
    $('h4').dblclick(function(){
        $(this).css("background-color","red");
    });
});

$(document).ready(function(){
    $('#one').mouseenter(function(){
        alert('you entered p tag');
    })
})

$(document).ready(function(){
    $('input').focus(function(){
        $(this).css('background-color','yellow');
    });
    $('input').blur(function(){
        $(this).css('background-color','blue');
    });
});

// multiple handlers for single tag
$(document).ready(function(){
    $('#mulhandle').on({
        mouseenter : function(){
            $(this).css('background-color','lightgray');
        },
        mouseleave:function(){
            $(this).css('background-color','lightblue');
        },
        click : function(){
            $(this).css('background-color','yellow');
        }

    });
});
