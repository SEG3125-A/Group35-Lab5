// Used to validate general contact form fields
const validateFields = (message)=>{
    // console.log("the email is");
    if (message == "email") {
        let email = document.getElementById("InputEmailContactGen").value;
        // console.log(email);
        let filterEmail = /^[a-z]+\.?[a-z]+@[a-z]+\.[a-z]+/;
        if(filterEmail.test(email)) {
            return true
        } else {
            return false
        }
    } else if (message == "subject") {
        let subj = document.getElementById("exampleFormControlTextarea1").value;
        console.log("the subject is",subj);
        let filterText = /^.*\S+.*$/;
        if (filterText.test(subj)) {
            return true
        } else {
            return false
        }
    }
}

const clearFields = ()=>{
    let email = document.getElementById("InputEmailContactGen");
    let subj = document.getElementById("exampleFormControlTextarea1");
    email.value = "";
    subj.value = "";
}


$(document).ready(function() {
    // When the page loads, the home navlink should be active and whenever we refresh, we should go to home page and no prior data should be on 
    // the link of the website
    $("#homeId").addClass("active");
    $(window).scrollTop(0);

    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
    // Adding active classes 

    $(".nav-link").on("click", function(){
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });

     //adding active classes when entering related section
    $("#home").on("mouseenter",function(){
        $(".nav-link").removeClass("active");
        $('#homeId').addClass("active");
        
    })
    $("#service").on("mouseenter",function(){
        $(".nav-link").removeClass("active");
        $('#service-navlink').addClass("active");
        
    })
    $("#team").on("mouseenter",function(){
        $(".nav-link").removeClass("active");
        $('#team-navlink').addClass("active");
        
    })
    $("#booking").on("mouseenter",function(){
        $(".nav-link").removeClass("active");
        $('#booking-navlink').addClass("active");
        
    })
    $("#contact").on("mouseenter",function(){
        $(".nav-link").removeClass("active");
        $('#contact-navlink').addClass("active");
        
    })

    // Lolita addings that Amani moved here 
    $("input").focus(function(){
        $(this).css("background-color", "#fbfbf0");
    });
    $("input").blur(function(){
        $(this).css("background-color", "white");
    });

    $("textarea").focus(function(){
        $(this).css("background-color", "#fbfbf0");
    });
    $("textarea").blur(function(){
        $(this).css("background-color", "white");
    });

    $("select").focus(function(){
        $(this).css("background-color", "#fbfbf0");
    });
    $("select").blur(function(){
        $(this).css("background-color", "white");
    });

    $("input").on("mouseenter", function(){
        $(this).addClass("showInput");
    });

    $("input").on("mouseleave", function(){
        $(this).removeClass("showInput");
    });
    $("select").on("mouseenter", function(){
        $(this).addClass("showInput");
    });

    $("select").on("mouseleave", function(){
        $(this).removeClass("showInput");
    });

    // General Contact form pop ups 
    $( "#dialogEm").dialog({
        autoOpen: false,
        modal:true,
        width:400,
        buttons: {
            "Retry": function() {
              $( this ).dialog( "close" );
            },
        },
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "explode",
          duration: 1000
        }
    });

    $( "#dialogText").dialog({
        autoOpen: false,
        modal:true,
        width:400,
        buttons: {
            "Retry": function() {
              $( this ).dialog( "close" );
            },
        },
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "explode",
          duration: 1000
        }
    });

    $( "#dialogThank").dialog({
        autoOpen: false,
        modal:true,
        width:400,
        buttons: {
            "Go back to website": function() {
              $( this ).dialog( "close" );
            },
        },
        show: {
          effect: "blind",
          duration: 1000
        },
        hide: {
          effect: "explode",
          duration: 1000
        }
    });

    $("#openerContact").click(function() {
        if (!validateFields("email")) {
            $("#dialogEm").dialog("open");
        } 
        else if (!validateFields("subject")) {
            $("#dialogText").dialog("open");
        } 
        else {
            $("#dialogThank").dialog("open");
            clearFields();
        }        
    });


    $("#InputEmailContactGen").on("mouseenter", function(){
        $("#InputEmailContactGen").addClass("showInput");
    });

    $("#InputEmailContactGen").on("mouseleave", function(){
        $("#InputEmailContactGen").removeClass("showInput");
    });


    $("#exampleFormControlTextarea1").on("mouseenter", function(){
        $("#exampleFormControlTextarea1").addClass("showInput");
    });

    $("#exampleFormControlTextarea1").on("mouseleave", function(){
        $("#exampleFormControlTextarea1").removeClass("showInput");
    });

    $("#InputEmailContactGen").tooltip();
    
	// leon's flip function for slide bar 
  	$("#flip").click(function(){
    	$("#panel").slideToggle("slow");
  	});
  	
  	$("#flip2").click(function(){
    	$("#panel2").slideToggle("slow");
  	});





  
  });
  