let images = document.getElementsByClassName("image")
let previousImageNav = document.getElementsByTagName("span")[0]
let nextImageNav = document.getElementsByTagName("span")[1]
let closeImage = document.getElementsByTagName("span")[2]
let number

Array.from(images).forEach(image => {
    image.addEventListener("click", function (event) {
        document.getElementById("overlay").style.display = "block"
        document.getElementById("imageOverlayed").src = event.target.getAttribute('src')
        number = Number(event.target.getAttribute('src')[9])
    })
});


previousImageNav.addEventListener("click", function (event) {
    if (number - 1 > 0) number--
    else number = images.length

    document.getElementById("imageOverlayed").src = `./images/${number}.jpg`
    number = event.target.getAttribute('src')[9]
})

nextImageNav.addEventListener("click", function (event) {
    if (number + 1 <= images.length) number++
    else number = 1

    document.getElementById("imageOverlayed").src = `./images/${number}.jpg`
    number = event.target.getAttribute('src')[9]
})

closeImage.addEventListener("click", function () {
    document.getElementById("overlay").style.display = "none"
})

