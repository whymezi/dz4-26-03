const btn = document.querySelector('.btn')

btn.addEventListener('click',() => {
    const request = new XMLHttpRequest()
    request.open("GET", "format.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
        const data = JSON.parse(request.response)
        document.querySelector('.mother').innerHTML = data.mother
        document.querySelector('.father').innerHTML = data.father
        document.querySelector('.son').innerHTML = data.son
    }
})