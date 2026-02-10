// detect change in text content

const nameInput = document.getElementById("myInput")

document.getElementById("myInput").addEventListener("change", ()=> {
    document.getElementById("output").textContent = "Changed detected"

    console.log(nameInput.name)
})


// show option selected in the console

const courseInput = document.getElementById("course")
const btn = document.getElementById("btn")
const form = document.getElementById("myForm")
const output = document.getElementById("output")

courseInput.addEventListener("change", () => {
    console.log(courseInput.value)
    output.textContent = courseInput.value
})

// show form details in console

form.addEventListener("submit",(event)=>{

    event.preventDefault();

    const name = nameInput.value
    const course = courseInput.value
    console.log(name, course)

    output.textContent= name + " " + course;

})