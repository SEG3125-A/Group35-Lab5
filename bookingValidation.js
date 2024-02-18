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
        toggle();
    }
}

function toggle(){
	let element = document.getElementById("payment");
	let hidden = element.getAttribute("hidden");
	
	if (hidden) {
       element.removeAttribute("hidden");
    } else {
       element.setAttribute("hidden", "hidden");
    }

}