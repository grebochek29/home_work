function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}




function register() {
    const regUsername = document.getElementById('regUsername').value
    const regPassword = document.getElementById('regPassword').value
    const confirmPassword = document.getElementById('confirmPassword').value
    const regEmail = document.getElementById('regEmail').value
    const errorMessage = document.getElementById('errorMessage')





    if (regUsername && regPassword && confirmPassword && regEmail) {
        if (regPassword === confirmPassword) {
            if (!localStorage.getItem(regUsername)) {
                if (validateEmail(regEmail)) {
                    localStorage.setItem(regUsername, regPassword)
                    alert('Регистрация успешна!')
                } else {
                    errorMessage.innerText = 'Некорректный формат электронной почты!'
                }
            } else {
                errorMessage.innerText = 'Пользователь с таким именем уже существует!'
            }
        } else {
            errorMessage.innerText = 'Пароли не совпадают!'
        }
    } else {
        errorMessage.innerText = 'Заполните все поля!'
    }
}




function login() {
    const loginUsername = document.getElementById('loginUsername').value
    const loginPassword = document.getElementById('loginPassword').value
    const loginEmail = document.getElementById('loginEmail').value
    const errorMessage = document.getElementById('errorMessage')
    const storedPassword = localStorage.getItem(loginUsername)

    
    if (loginPassword === storedPassword) {
        if (validateEmail(loginEmail)) {
            alert('Вход успешен!')
        } else {
            errorMessage.innerText = 'Неверный формат электронной почты!'
        }
    } else {
        errorMessage.innerText = 'Неверное имя пользователя или пароль!'
    }
}
