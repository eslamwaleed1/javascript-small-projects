let images = Array.from(document.getElementsByClassName("image"))
let currentIndex

let overlay = document.getElementById("overlay")
let previousImageNav = document.getElementsByTagName("span")[0]
let nextImageNav = document.getElementsByTagName("span")[1]
let closeImage = document.getElementsByTagName("span")[2]



images.forEach(image => {
    image.addEventListener("click", function (event) {
        document.getElementById("imageOverlayed").src = event.target.getAttribute('src')
        overlay.style.display = "block"
        currentIndex = images.findIndex((element => element == event.target))
    })
});


previousImageNav.addEventListener("click", function (event) {
    if (currentIndex > 0) currentIndex--
    else currentIndex = images.length - 1

    document.getElementById("imageOverlayed").src = images[currentIndex].src
})

nextImageNav.addEventListener("click", function (event) {
if (currentIndex < images.length-1) currentIndex++
    else currentIndex = 0

    document.getElementById("imageOverlayed").src = images[currentIndex].src
})

closeImage.addEventListener("click", function () {
    document.getElementById("overlay").style.display = "none"
})

overlay.addEventListener("click", (event) => {
    if(event.target === overlay)
    overlay.style.display = "none"
})
