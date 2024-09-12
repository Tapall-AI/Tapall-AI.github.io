function validate() {
    let nameEle = document.getElementById("name");
    let emailEle = document.getElementById("email");
    let messageEle = document.getElementById("message");

    let isValid = true;

    if (nameEle.value.length > 100 || nameEle.value === '') {
        nameEle.classList.remove('is-valid');
        nameEle.classList.add('is-invalid');
        nameEle.setCustomValidity('invalid');
        isValid = false;
    } else {
        nameEle.setCustomValidity('');
    }
    if (emailEle.value.length > 100 || !validateEmail(emailEle.value)) {
        emailEle.classList.remove('is-valid');
        emailEle.classList.add('is-invalid');
        emailEle.setCustomValidity('Invalid email');
        isValid = false;
    } else {
        emailEle.classList.remove('is-invalid');
        emailEle.classList.add('is-valid');
        emailEle.setCustomValidity('');
    }
    if (messageEle.value.length > 500) {
        messageEle.classList.remove('is-valid');
        messageEle.classList.add('is-invalid');
        messageEle.setCustomValidity('invalid');
        isValid = false;
    } else {
        messageEle.setCustomValidity('');
    }

    return isValid;
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function saveEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
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
            if (data.code === 200) {
                document.getElementById('contact-feedback-success').innerHTML = 'Thank you for submitting your email!';
                document.getElementById('contact-feedback-success').style.display = 'block';
            } else {
                document.getElementById('contact-feedback-fail').innerHTML = 'An exception occurred. Please try again later';
                document.getElementById('contact-feedback-fail').style.display = 'block';
            }
        }, error: function (jqxhr, textStatus, error) {
            document.getElementById('contact-feedback-fail').innerHTML = 'An exception occurred. Please try again later';
            document.getElementById('contact-feedback-fail').style.display = 'block';
        }
    })

    // Displaying a success message
    // Here you could also send the email to a server using fetch or XMLHttpRequest
}

(function testValid() {
    'use strict'

    let forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                form.classList.remove('was-validated');
                event.preventDefault();
                event.stopPropagation();
                if (!form.checkValidity() || !validate()) {
                    form.classList.add('was-validated');
                } else {
                    saveEmail();
                }
                return false;
            }, false)
        })
})();
