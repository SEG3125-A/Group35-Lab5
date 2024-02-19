(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

// Fetch all the forms and checks if validated then sends a confirmation message
function msgValidate() {
    const forms = document.querySelectorAll('.needs-validation')
    var error = false
    for (let i = 0; i < forms.length; i++) {
        if (forms[i].checkValidity() == false) {
            error = true;
        }
    }
    if (error == false) {
        alert("Your appointment is confirmed!");
    }
}

function emailValid(){
    var regexMail = /^[a-z]+\.?[a-z]+@[a-z]+\.[a-z]+/;
    var mailInput = document.getElementById("InputEmail1").value;
    if(regexMail.test(mailInput)){
        
        return true;
    }
    else{
        
        return false;
    }
}

function phoneNumberValid(){
    var regexPhone = /^[0-9]{3}[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    var numberInput = document.getElementById("InputNumber").value;
    if(regexPhone.test(numberInput)){ 
        return true;

    }
    else{
        return false;
    }
}

function firstNametextOnly(){
    var regexNotNumber=/[^0-9]/;
    var name = document.getElementById('firstName').value;
    if(regexNotNumber.test(name)){
        return true;
    }
    else{
        return false;
    }

}

function lastNametextOnly(){
    var regexNotNumber=/[^0-9]/;
    var name = document.getElementById('lastName').value;
    if(regexNotNumber.test(name)){
        return true;
    }
    else{
        return false;
    }

}

// queries to change feedback message based on invalid inputs
$(document).ready(function() {

    $('#appointment').click(function() {
        if(document.getElementById("InputEmail1").value != "" && !emailValid()){
            $("#feedback_mail").text("E-mail should be in this form aaa@aaa.aaa");
        }
        else if(document.getElementById("InputEmail1").value == ""){
            $("#feedback_mail").text("Please provide a valid e-mail!");
        }

        if(document.getElementById("InputNumber").value != "" && !phoneNumberValid()){
            $("#feedback_number").text("Phone number should be 10 digits separated (or not) with spaces, points or dashes: XXX-XXX-XXXX, XXXXXXXXXX, XXX XXX XXX, XXX.XXX.XXXX");
        }
        else if(document.getElementById("InputNumber").value == ""){
            $("#feedback_number").text("Please provide a valid number!");
        }

        if(document.getElementById("firstName").value != "" && !firstNametextOnly()){

            $("#fname_feedback").text("Only letters are acccepted in this field");
        }
        else if(document.getElementById("firstName").value == ""){
            $("#fname_feedback").text("Please fill in your first name!");
        }

        if(document.getElementById("lastName").value != "" && !lastNametextOnly()){

            $("#lname_feedback").text("Only letters are acccepted in this field");
        }
        else if(document.getElementById("lastName").value == ""){
            $("#lname_feedback").text("Please fill in your last name!");
        }
        
    })

    $("#feedback_mail").tooltip();
    $("#feedback_number").tooltip();
})
$(function() {
    var professionalAvailability = {
        "EmilyWatson": [1, 2, 3, 4], 
        "MichaelJohnson": [2, 3, 4, 5], 
        "AlexRodriguez": [1, 2,  3, 4], 
    };

    $("#professional").change(function() {
        var selectedProfessional = $(this).val();
        var availableDays = professionalAvailability[selectedProfessional];
        $("#datepicker").datepicker("destroy").datepicker({
            beforeShowDay: function(date) {
                var day = date.getDay();
                if (availableDays && availableDays.length > 0) {
                    return [availableDays.includes(day)];
                } else {
                    return [true]; 
                }
            },
            onSelect: function() {
                $(this).trigger('change'); 
            }
        });
    });

    
    $("#datepicker").datepicker();

   
    $('form').on('submit', function(event) {
        if (!this.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        $(this).addClass('was-validated'); 
    });

    $("#datepicker").change(function() {
        if (this.value) {
            $(this).removeClass('is-invalid').addClass('is-valid');
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var readMoreBtns = document.querySelectorAll('.read-more-btn');
    readMoreBtns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var moreText = this.previousElementSibling.querySelector('.more-text');
        if (moreText.style.display === "none" || moreText.style.display === "") {
          moreText.style.display = "inline"; 
          btn.textContent = "Read Less"; 
        } else {
          moreText.style.display = "none"; 
          btn.textContent = "Read More";
        }
      });
    });
  });
  
  
