$(document).ready(function(){
    $("#toggli").click(function() {
       $('p').toggle(); 
    });
});

// $(document).ready(function(){
//     $("#faddin").click(function(){
//         $('#div1').fadeIn();
//         $('#div2').fadeIn('slow');
//         $('#div3').fadeIn(5000);
//     });
// });

$(document).ready(function(){
    $("#faddin").click(function(){
        $('#div1').fadeToggle();
        $('#div2').fadeToggle('slow');
        $('#div3').fadeToggle(5000);
    });
});

//slide down panel
$(document).ready(function(){
    $("#flip").click(function(){
        //$("#panel").slideDown("slow");
      $("#panel").slideToggle("slow");  
    });
});

//animate box 
$(document).ready(function(){
    $("#animat").click(function(){
        $("#anime").animate({left:'250px',
        height:'150px',
        width:'150px'
    
    });
    });
});

//queue functionality
$(document).ready(function(){
    $('#animat1').click(function(){
        var div=$('#anime1');
        div.animate({height:'300px',opacity: '0.4'},'slow');
        div.animate({width:'300px',opacity:'0.8'},'slow');
        div.animate({height:'100px',opacity:'0.4'},'slow');
        div.animate({width:'100px',opacity:'0.8'},'slow');


    });
});

// stop method to stop 
$(document).ready(function(){
    $('#flip1').click(function(){
    $('#panel1').slideDown(5000);
    });
    $('#stop').click(function(){
        $('#panel1').stop();
    });
});


// calling function
$(document).ready(function(){
    $('#callingbtn').click(function(){
        $('#call').hide('slow',function(){
            alert("now the para is hidden");
        });
    });
});

// chaining js
$(document).ready(function(){
    $('#chaining').click(function(){
        $('#chain').css('color','red').slideUp(2000).slideDown(2000);
    });
});

// get html elements
$(document).ready(function(){
    $('#textbtn').click(function(){
        alert("text:"+$('#test').text());
    });
    $('#htmlbtn').click(function(){
        alert("$html:"+$('#test').html());
    });
});

$(document).ready(function(){
    $('#gettinvalue').click(function(){
        alert("value:" + $('getvalue').val());
    });
});

// set html values
$(document).ready(function(){
    $("#btn2").click(function(){
      $("#test2").text("Hello all!");
    });
    $("#btn3").click(function(){
      $("#test3").html("<b>Iam back!</b>");
    });
    $("#btn4").click(function(){
      $("#test4").val("sid");
    });
  });