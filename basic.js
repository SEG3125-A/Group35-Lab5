function openService(){
    window.location.href = "#service";
}

function openBooking(){
    window.location.href = "#booking";
}

// code inspired by: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_focus_blur
//jquery to change input field color when its active
$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "#fbfbf0")
    });
    $("input").blur(function(){
        $(this).css("background-color", "white")
    });

    $("textarea").focus(function(){
        $(this).css("background-color", "#fbfbf0")
    });
    $("textarea").blur(function(){
        $(this).css("background-color", "white")
    });

    $("select").focus(function(){
        $(this).css("background-color", "#fbfbf0")
    });
    $("select").blur(function(){
        $(this).css("background-color", "white")
    });
  });
