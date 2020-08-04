const username = document.getElementById("username")
const password = document.getElementById("password")
const form = document.getElementById('form')
const message = document.getElementById('errormessage')

const x = readCookie('login')
if (x) {
    localStorage.setItem('name', x[0])
    window.location.assign("intro.html")

}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (username.value == '' || username.value == null) {
        message.innerHTML = 'Enter a Username'


    }
    else {
        if (password.value == '' || password.value == null) {
            message.innerHTML = 'Enter a password'
        }
        else {
            localStorage.setItem('name', username.value)
            window.location.assign("intro.html")
            let a = [username.value, password.value]
            if (document.getElementById('checkbox').checked)

                createCookie('login', a, 1)
        }

    }




})


function readCookie(name) {

    let cookies = document.cookie.split('; ')
    const login = cookies.find((cookies) => cookies.startsWith('login'))
    if (login) {
        let cookievalue = (login.split('='))
        return (cookievalue[1].split(','))
    }

}
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

