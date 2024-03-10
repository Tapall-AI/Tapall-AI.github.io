function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var isValid = true;

    if (name == "") {
        document.getElementById("nameError").innerHTML = "Please enter your name";
        document.getElementById("nameError").style.visibility = "visible";
        isValid = false;
    } else if (name.length > 100) {
        document.getElementById("nameError").innerHTML = "Name must be 100 characters or less";
        document.getElementById("nameError").style.visibility = "visible";
        isValid = false;
    }

    if (email == "") {
        document.getElementById("emailError").innerHTML = "Please enter your email address";
        document.getElementById("emailError").style.visibility = "visible";
        isValid = false;
    } else if (email.length > 100) {
        document.getElementById("emailError").innerHTML = "Email address must be 100 characters or less";
        document.getElementById("emailError").style.visibility = "visible";
        isValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address";
        document.getElementById("emailError").style.visibility = "visible";
        isValid = false;
    }

    if (message == "") {
        document.getElementById("messageError").innerHTML = "Please enter your message";
        document.getElementById("messageError").style.visibility = "visible";
        isValid = false;
    } else if (message.length > 500) {
        document.getElementById("messageError").innerHTML = "Message must be 500 characters or less";
        document.getElementById("messageError").style.visibility = "visible";
        isValid = false;
    }

    return isValid;
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function saveEmail() {
    if (!validate()) return;

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    $.ajax({
        url: 'https://www.kuosanyinzi.com/tap-serve/tap/open/saveMsg',
        // url: 'http://127.0.0.1:8080/tap-serve/tap/open/saveMsg',
        type: 'post',
        data: JSON.stringify({
            name: name,
            email: email,
            message: message
        }),
        contentType: "application/json",
        dataType: 'json',
        success: function (data, dataTextStatus, jqxhr) {
            if (data.code == 200) {
                document.getElementById('successMessage').innerHTML = 'Thank you for submitting your email!'
                document.getElementById('successMessage').style.display = 'block';
            } else {
                document.getElementById('successMessage').innerHTML = 'An exception occurred. Please try again later'
                document.getElementById('successMessage').style.display = 'block';
            }
        }, error: function (jqxhr, textStatus, error) {
            document.getElementById('successMessage').innerHTML = 'An exception occurred. Please try again later'
            document.getElementById('successMessage').style.display = 'block';
        }
    })

    // Displaying a success message
    // Here you could also send the email to a server using fetch or XMLHttpRequest
}
