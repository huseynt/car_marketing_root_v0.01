window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.main');
    scroll.classList.toggle("active", window.scrollY > 300)
});


window.addEventListener('scroll', function () {
    var scroll2 = document.querySelector('.main_2');
    scroll2.classList.toggle("active", window.scrollY>300 & window.scrollY<1400);
});


// window.addEventListener('scroll', function (e) {
//     console.log(window.scrollY)
// });

