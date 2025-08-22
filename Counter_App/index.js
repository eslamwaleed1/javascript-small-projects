let counter = document.getElementById("counter")

let counterTitle = document.getElementById("title")
let titleInput = document.querySelector("input[placeholder]")



document.addEventListener("click", function (e) {
    if (e.target.matches("button[data-action]")) {
        let action = e.target.dataset.action

        switch (action) {
            case "saveTitle": {
                counterTitle.innerHTML = titleInput.value
                titleInput.style.display = "none"
                document.querySelector("button[id]").style.display = "none"
            }
                break
            case "increment":
                counter.textContent = parseInt(counter.textContent) + 1
                break
            case "decrement":
                counter.textContent = parseInt(counter.textContent) - 1
                break
            case "reset":
                counter.textContent = 0
                break
            case "saveCounter": {
                document.getElementById("savedCounters").insertAdjacentHTML("beforeend",counterCardMaker(counterTitle.textContent, counter.textContent))
            }
        }

    }
})



function counterCardMaker(title, value) {
    return `
    <div>
        <p>${title}: ${value}  Date: ${new Date().toISOString()}</p>
    </div>`
}



