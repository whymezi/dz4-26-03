const btn = document.querySelector('.btn')

btn.addEventListener('click',() => {
    const request = new XMLHttpRequest()
    request.open("GET", "format2.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
        const data = JSON.parse(request.response)
        document.querySelector('.country').innerHTML = data.country
        document.querySelector('.affiliation').innerHTML = data.affiliation
        document.querySelector('.name').innerHTML = data.name
        document.querySelector('.height').innerHTML = data.height
        document.querySelector('.age').innerHTML = data.age
        document.querySelector('.weight').innerHTML = data.weight
    }
})