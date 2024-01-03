const clickDiv = document.getElementById("click")
const noClick = document.getElementById("noClick")
let inputElm = document.getElementById("inputa")
let divDef = document.getElementById("divDef")
let soundElm = document.getElementById("sound")
let audioElm = document.querySelector("audio")
let bggelm = document.getElementById("bgg")
const oneElm = document.getElementById("one")
const twoElm = document.getElementById("two")
const threeElm = document.getElementById("three")
const fourElm = document.getElementById("four")
const fiveElm = document.getElementById("five")
let mtoneElm = document.getElementById("mtone")
let mttwoElm = document.getElementById("mttwo")
let mtthreeElm = document.getElementById("mtthree")
let mtfourElm = document.getElementById("mtfour")
let mtfiveElm = document.getElementById("mtfive")

let apiUrl = {
    url: `https://api.dictionaryapi.dev/api/v2/entries/en/`
}
function apiData() {
    let inputElmvalue = inputElm.value
    fetch(`${apiUrl.url}${inputElmvalue}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showData(data)
        })
}



clickDiv.addEventListener("click", () => {
    clickDiv.style.display = "none"
    noClick.style.display = "flex"


})
inputElm.addEventListener("keypress", (event) => {

    if (event.keyCode === 13) {

        divDef.style.display = "block"

        let aA = document.getElementById("aA")
        aA.innerHTML = inputElm.value
        apiData()
        inputElm.value = ""
        bggelm.style.display ="none"
        mtoneElm.style.display = "none"
        mttwoElm.style.display = "none"
        mtthreeElm.style.display = "none"
        mtfourElm.style.display = "none"
        mtfiveElm.style.display = "none"
    

    }
})

function showData(data) {
    let definition = document.getElementById("def")
    definition.innerHTML = `${data[0].phonetics[0].text}`
    audioElm.src = `${data[0].phonetics[0].audio}`
    let mtoneElm = document.getElementById("mtone")
    mtoneElm.innerHTML = `${data[0].phonetics[0].text}`
    mttwoElm.innerHTML = `${data[0].phonetics[0].text}`
    mtthreeElm.innerHTML = `${data[0].phonetics[0].text}`
    mtfourElm.innerHTML = `${data[0].phonetics[0].text}`
    mtfiveElm.innerHTML = `${data[0].phonetics[0].text}`
    mtfiveElm.innerHTML = `${data[0].meanings[1].partOfSpeech} , ${data[0].meanings[0].partOfSpeech} , ${data[0].meanings[2].partOfSpeech}`

}
soundElm.addEventListener("click", () => {
    audioElm.play()
})

const bi = document.getElementById("b")
bi.addEventListener("click", () => {
    divDef.style.display = "none"
    bggelm.style.display = "flex"
    
   
})

oneElm.addEventListener("click", () => {
    oneElm.style.color = "rgb(252, 4, 116)"
    twoElm.style.color = "rgb(0,0,0)"
    threeElm.style.color = "rgb(0,0,0)"
    fourElm.style.color = "rgb(0,0,0)"
    fiveElm.style.color = "rgb(0,0,0)"
    mtoneElm.style.display = "none"
    mttwoElm.style.display = "none"
    mtthreeElm.style.display = "none"
    mtfourElm.style.display = "none"
    mtfiveElm.style.display = "block"

})


twoElm.addEventListener("click", () => {
    twoElm.style.color = "rgb(252, 4, 116)"
    oneElm.style.color = "rgb(0, 0, 0)"

    threeElm.style.color = "rgb(0,0,0)"
    fourElm.style.color = "rgb(0,0,0)"
    fiveElm.style.color = "rgb(0,0,0)"

    mtoneElm.style.display = "none"
    mttwoElm.style.display = "none"
    mtthreeElm.style.display = "none"
    mtfourElm.style.display = "block"
    mtfiveElm.style.display = "none"

})
threeElm.addEventListener("click", () => {
    threeElm.style.color = "rgb(252, 4, 116)"
    oneElm.style.color = "rgb(0, 0, 0)"
    twoElm.style.color = "rgb(0,0,0)"

    fourElm.style.color = "rgb(0,0,0)"
    fiveElm.style.color = "rgb(0,0,0)"
    mtoneElm.style.display = "none"
    mttwoElm.style.display = "none"
    mtthreeElm.style.display = "block"
    mtfourElm.style.display = "none"
    mtfiveElm.style.display = "none"

})
fourElm.addEventListener("click", () => {
    fourElm.style.color = "rgb(252, 4, 116)"
    oneElm.style.color = "rgb(0, 0, 0)"
    twoElm.style.color = "rgb(0,0,0)"
    threeElm.style.color = "rgb(0,0,0)"
    fiveElm.style.color = "rgb(0,0,0)"
    mtoneElm.style.display = "none"
    mttwoElm.style.display = "block"
    mtthreeElm.style.display = "none"
    mtfourElm.style.display = "none"
    mtfiveElm.style.display = "none"

})
fiveElm.addEventListener("click", () => {
    fiveElm.style.color = "rgb(252, 4, 116)"
    oneElm.style.color = "rgb(0,0,0)"
    twoElm.style.color = "rgb(0,0,0)"
    threeElm.style.color = "rgb(0,0,0)"
    fourElm.style.color = "rgb(0,0,0)"
    mtoneElm.style.display = "block"
    mttwoElm.style.display = "none"
    mtthreeElm.style.display = "none"
    mtfourElm.style.display = "none"
    mtfiveElm.style.display = "none"

})
