function tempconv() {
    var select = document.getElementById('select').value
    var fahren = document.getElementById('initialvalue').value
    const celcius = document.getElementById('output')
    if (select == "fahrenheit") {
        celcius.innerHTML = (fahren - 32) * 5 / 9
    }
    else{
        celcius.innerHTML = (9/5*fahren)+32
    }
}

