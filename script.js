const Input = document.querySelector('input[type=text]')
const form = document.querySelector('form')

Input.addEventListener('blur', (event) => {
    var info = form.email.value

    if(info.indexOf("@ ") >= 0) {
        var email = info.split("@")
        if (email[1].indexOf('.') < 0) {
            console.log('complete seu e-mail corretamente')
        }
    }
    console.log(email)
})
