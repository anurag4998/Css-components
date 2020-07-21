
$(".color-change").click(function () {
    let a = parseInt(Math.random() * 256)
    let b = parseInt(Math.random() * 256)
    let c = parseInt(Math.random() * 256)

    $(".color-text").text(
        "rgb(" + a + "," + b + "," + c + ")"
    );

    $(".body").css("background-color", "rgb(" + a + "," + b + "," + c + ")")
    console.log(a, b, c)
})