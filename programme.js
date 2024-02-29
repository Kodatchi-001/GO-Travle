var scrolle_1 = document.getElementById('scrolle-2')
var scrolle_2 = document.getElementById('scrolle-1')

scrolle_1.onclick = function () {
    document.getElementById("scrolle").style.transform = 'translate(-65%)'
}

scrolle_2.onclick = function () {
    document.getElementById("scrolle").style.transform = 'translate(0%)'
}