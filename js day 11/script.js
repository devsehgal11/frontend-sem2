// Chnage heading color through button

/*
function handleClick() {
    document.querySelector("#heading").style.color = "red"

    document.getElementById("btn").textContent = 'Color changed'
}
*/

// Add image after clicking the button

/*
function handleClick() {
const image = document.createElement("img")

image.setAttribute("src", "https://www.pixelstalk.net/wp-content/uploads/2016/07/Download-Free-Pictures-3840x2160.jpg")

document.getElementById("content").append(image)

}
*/

// Create a button so that when the user clicks the button, an anchor tag appears which will redirect to krmu web site and a box with background color 'tomato', border with radius 20px and one text in its center appears

function handleClick() {

    const anchor = document.createElement("a")

    anchor.setAttribute("href", "https://www.krmu.edu.in/")
    anchor.textContent = "Visit KRMU"

    const box = document.createElement("div")
    box.style.width = "200px"
    box.style.height = "100px"
    box.style.backgroundColor = "tomato"
    box.style.borderRadius = "20px"
    box.style.display = "flex"
    box.style.justifyContent = "center"
    box.style.alignItems = "center"
    box.textContent = "This is a box"

    const content = document.getElementById("content")

    content.append(anchor)
    content.append(box)

}