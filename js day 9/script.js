/*
// change first paragraph text

const query = document.querySelector('#content p') // get frst paragraph as a variable
console.log(query)

query.textContent = 'mi bombo.' // new text to replace the first paragraph (p)

// change heading colors

const h1heading = document.getElementsByTagName("h1") // get headings as var

for(let i=0;i<h1heading.length;i++) { // loop to get every heading (h1)
    h1heading[i].style.color="tomato" // color for the headings
}

// chage para colors

const p1color = document.getElementsByTagName("p") // get paragraphs as var

for(let i=0;i<p1color.length;i++) { // loop to get every paragraph (p)
    p1color[i].style.color="blue" // color for the paragraph
}

// replace all paragraphs

const query2 = document.querySelectorAll('p') // get frst paragraph as a variable
console.log(query2, 'query 2')

for(let i=0;i<query2.length;i++) { // loop to get every paragraph (p)
    query2[i].textContent = 'mi bombo.' // new text to replace the first paragraph (p)
}
*/

// use different colors for odd and even paragraphs

const paragraphs = document.querySelectorAll("p") // get paras as var

for(let i=0;i<paragraphs.length;i++) { // loop to get every para
    if (i % 2 == 0) {
        paragraphs[i].style.color="tomato" // color for the even paras
    }
    else {
        paragraphs[i].style.color="blue " // color for the odd paras
    }
}