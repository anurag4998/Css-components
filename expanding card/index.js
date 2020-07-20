
// for (let i = 0; i < 5; i++) {
//     let classname = document.getElementsByClassName('image')[i];

//     classname.addEventListener('click', function (event) {

//         classname.classList.toggle("active");

//     });
// }

for (let i = 0; i < 5; i++) {





    $('.image').eq(i).click(function () {
        for (let j = 0; j < 5; j++) {
            console.log($('.image-container').children(j))
            if ($('.image-container').children().hasClass(('active'))) {
                $('.image-container').children(j).removeClass(('active'))
            }
        }
        $('.image').eq(i).addClass(('active'))
    })
}





