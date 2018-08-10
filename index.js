const output = document.getElementById("output")

//kata1
const kata1Element = document.createElement("p")
output.appendChild(kata1Element)
for (let count = 1; count <= 20; count++) {
    const spanElement = document.createElement("span")
    let countTextNode
    if (count === 20) {
        countTextNode = document.createTextNode(count)
    } else {
        countTextNode = document.createTextNode(count + ", ")
    }
    spanElement.appendChild(countTextNode)
    kata1Element.appendChild(spanElement)
}
// kata2
const kata2Element = document.createElement("p")
output.appendChild(kata2Element)
for (let count = 2; count <= 20; count += 2) {
    const spanElement = document.createElement("span")
    let countTextNode
    if (count === 20) {
        countTextNode = document.createTextNode(count)
    } else {
        countTextNode = document.createTextNode(count + ", ")
    }
    spanElement.appendChild(countTextNode)
    kata2Element.appendChild(spanElement)
}
// kata3
const kata3Element = document.createElement("p")
output.appendChild(kata3Element)
for (let count = 1; count <= 20; count += 2) {
    const spanElement = document.createElement("span")
    let countTextNode
    if (count === 20) {
        countTextNode = document.createTextNode(count)
    } else {
        countTextNode = document.createTextNode(count + ", ")
    }
    spanElement.appendChild(countTextNode)
    kata3Element.appendChild(spanElement)
}
//kata4
const kata4Element = document.createElement("p")
output.appendChild(kata4Element)
for (let count = 5; count <= 100; count += 5) {
    const spanElement = document.createElement("span")
    let countTextNode
    if (count === 100) {
        countTextNode = document.createTextNode(count)
    } else {
        countTextNode = document.createTextNode(count + ", ")
    }
    spanElement.appendChild(countTextNode)
    kata4Element.appendChild(spanElement)
}
// kata5
const kata5Element = document.createElement("p")
output.appendChild(kata5Element)
for (let count = 20; count >= 1; count -= 1) {
    const spanElement = document.createElement("span")
    let countTextNode
    if (count === 1) {
        countTextNode = document.createTextNode(count)
    } else {
        countTextNode = document.createTextNode(count + ", ")
    }
    spanElement.appendChild(countTextNode)
    kata5Element.appendChild(spanElement)
}
//kata 6
const kata6Element = document.createElement("p")
output.appendChild(kata6Element)
for (let i = 1; i <= 10; i++) {
    document.write(i * i)
}
//kata7
const kata7Element = document.createElement("p")
output.appendChild(kata7Element)
for (let count = 20; count >= 2; count -= 2) {
    const spanElement = document.createElement("span")
    let countTextNode
    if (count === 2) {
        countTextNode = document.createTextNode(count)
    } else {
        countTextNode = document.createTextNode(count + ", ")
    }
    spanElement.appendChild(countTextNode)
    kata7Element.appendChild(spanElement)
}
//kata8
const kata8Element = document.createElement("p")
output.appendChild(kata8Element)
for (let count = 19; count >= 1; count -= 2) {
    const spanElement = document.createElement("span")
    let countTextNode
    if (count === 1) {
        countTextNode = document.createTextNode(count)
    } else {
        countTextNode = document.createTextNode(count + ", ")
    }
    spanElement.appendChild(countTextNode)
    kata8Element.appendChild(spanElement)
}
//kata9
const kata9Element = document.createElement("p")
output.appendChild(kata9Element)
for (let count = 100; count >= 5; count -= 5) {
    const spanElement = document.createElement("span")
    let countTextNode
    if (count === 5) {
        countTextNode = document.createTextNode(count)
    } else {
        countTextNode = document.createTextNode(count + ", ")
    }
    spanElement.appendChild(countTextNode)
    kata9Element.appendChild(spanElement)
}
//kata11
const kata11Element = document.createElement("p")
output.appendChild(kata11Element)
var sequence = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]
for (let i = 0; i < sequence.length; i++) {
    const spanElement = document.createElement("span")
    let countTextNode
    if (i === sequence.length - 1) {
        countTextNode = document.createTextNode(sequence[i])
    } else {
        countTextNode = document.createTextNode(sequence[i] + ", ")
    }
    spanElement.appendChild(countTextNode)
    kata11Element.appendChild(spanElement)
}
const kata12Element = document.createElement("p")
output.appendChild(kata12Element)
var sequence = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]
for (let i = 0; i < sequence.length; i++) {
    const spanElement = document.createElement("span")
    let countTextNode
    if (sequence[i] % 2 === 0) {
        countTextNode = document.createTextNode(sequence[i]+ ", ")
        spanElement.appendChild(countTextNode)
    kata12Element.appendChild(spanElement)
    }
}
const kata13Element = document.createElement("p")
output.appendChild(kata13Element)
var sequence = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472]
for (let i = 0; i < sequence.length; i++) {
    const spanElement = document.createElement("span")
    let countTextNode
    if (sequence[i] % 2 === 1){
        countTextNode = document.createTextNode(sequence[i]+ ", ")
        spanElement.appendChild(countTextNode)
    kata13Element.appendChild(spanElement)
    }
}
