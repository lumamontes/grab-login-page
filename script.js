const Input = document.querySelector('input[type=text]')
const form = document.querySelector('form')
const borda = document.querySelector('fieldset')
const icon = document.querySelector('.fas')

Input.addEventListener('blur', (event) => {
    var info = form.email.value
    if (info.indexOf("@") >= 0) {
        var email = info.split("@")
        if (email[1].indexOf('.') < 0) {

            borda.style.borderColor = '#FF5757'
            icon.style.color = '#FF5757'

            var lista = document.createElement('p')
            var textolista = document.createTextNode('Por favor, insira um e-mail válido.')
            lista.appendChild(textolista)

            var divinput = document.querySelector('.inputemail');
            divinput.appendChild(lista)
            
            divinput.style.margin = '10px'

            divinput.classList.remove('inputemail')

        }
    }
})
