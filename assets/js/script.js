let header = document.getElementById("menu");
let offset = header.offsetHeight;
let boxT = document.querySelectorAll('.box-tech')
let img = document.querySelectorAll('.button-teh img')
let sendEmail = document.getElementById('Em')
let sbmit = document.getElementById('submit')
let sendComment = document.getElementById('comment')
let addToCard = document.getElementById('.cart')
let cart = document.querySelector('.menu_t span')
let form = document.getElementById('form')
let modal = document.querySelector('.background-m')
let body = document.querySelector('body')
let x = document.querySelector('.modal i')
let pass = document.getElementById('pasW')
let btnAccept = document.getElementById('ace')
let pasInput = document.getElementById('passWord')
let afteAccept = document.getElementById('aftAccept')
let formS = document.getElementById('formS')
let username = document.getElementById('userName')
let Em = document.getElementById('Em')
let messageS = document.getElementById('messageSu')
let user = document.getElementById('user')
let clickM = document.getElementById('clickM')
let headerM = document.getElementById('menuM')
let count = 0
//event
window.onscroll = function () {
    if (window.scrollY > offset - 20) {
        header.classList.add('fixed-top');
    }
    else if (window.screenY < offset - 20) {
        header.classList.remove('fixed-top');
    }
}
function addCart() {
    count += 1
    cart.style.display = 'block'
    cart.textContent = count
}
function sendE() {
    let valE = sendEmail.value
    if (valE) {
        let email = JSON.parse(localStorage.getItem('Email')) || []
        email.push(valE)
        localStorage.setItem('Email', JSON.stringify(email))
        sendEmail.value = ''
    }
}
function sendC() {
    let valC = sendComment.value
    if (valC) {
        let comment = JSON.parse(localStorage.getItem('Comment')) || []
        comment.push(valC)
        localStorage.setItem('Comment', JSON.stringify(comment))
        sendComment.value = ''
    }
}
function show(index) {
    boxT.forEach(box => {
        box.classList.remove('show')
    })
    img.forEach(btn => {
        btn.classList.remove('active')
    })
    boxT[index].classList.add('show')
    img[index].classList.add('active')
}
function add() {
    modal.classList.add('active')
    body.style.overflowY = 'hidden'
}
x.addEventListener('click', function () {
    modal.classList.remove('active')
    body.style.overflowY = 'visible'
})

function pasW() {
    let password = Math.floor(Math.random() * 100000);
    pass.textContent = password;
    btnAccept.addEventListener('click', accept)

    function accept() {
        let pasWW = pasInput.value
        if (pasWW == password) {
            alert('رمز امنیتی تایید شد')
            pasInput.style.display = 'none'
            btnAccept.style.display = 'none'
            afteAccept.style.display = 'none'
            pass.style.display = 'none'
        }
        else {
            alert('try again')
        }
    }
}
formS.addEventListener('click', function () {
    if (pasInput.value == '' || Em.value == '' || username.value == '') {
        alert('try again')
    }
    else {
        let name = username.value
        Em.style.display = 'none'
        username.style.display = 'none'
        messageS.textContent = 'ثبت نام موفقیت امیز بود'
        formS.style.display = 'none'
        user.innerHTML = name
    }
})
clickM.addEventListener('click',function(){
    headerM.classList.toggle('active')
})