const username = document.getElementById("username")
const password = document.getElementById("password")
const form = document.getElementById('form')
const message = document.getElementById('errormessage')
var crypt = {
    secret: "CIPHERKEY",
    encrypt: function (clear) {
        // encrypt() : encrypt the given clear text

        var cipher = CryptoJS.AES.encrypt(clear, crypt.secret);
        cipher = cipher.toString();
        return cipher;
    },

    decrypt: function (cipher) {
        // decrypt() : decrypt the given cipher text

        var decipher = CryptoJS.AES.decrypt(cipher, crypt.secret);
        decipher = decipher.toString(CryptoJS.enc.Utf8);
        return decipher;
    }
};

const x = readCookie('login')
console.log(x)
if (x) {
    console.log(2)

    let name = crypt.decrypt(x[0]);
    localStorage.setItem('name', name)
    window.location.assign("intro.html")

}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (username.value !== 'LTI' || username.value == null) {
        message.innerHTML = 'Enter a valid Username'


    }
    else {
        if (password.value !== '123' || password.value == null) {
            message.innerHTML = 'Enter a password'
        }
        else {
            localStorage.setItem('name', username.value)
            window.location.assign("intro.html")
            let a = [crypt.encrypt(username.value), crypt.encrypt(password.value)]
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

