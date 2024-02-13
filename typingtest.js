let quotation = document.getElementById("quoteDisplay");
let time = document.getElementById("timer")
let result = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");
let enteredInput = document.getElementById("quoteInput");
let resetBtn = document.getElementById("resetBtn");
let timeId = null;
let count = null;
let load = document.getElementById("loading");

function disp() {
    let options = {
        method: "GET"
    }
    let url = "https://apis.ccbp.in/random-quote";
    load.classList.remove('d-none')
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            load.classList.add('d-none')
            quotation.textContent = jsonData.content;
        })
}

function timing() {


    timeId = setInterval(function() {
        count += 1;
        time.textContent = count;
    }, 1000)
}
disp();
timing();


submitBtn.addEventListener("click", function() {
    if (quotation.textContent === enteredInput.value) {
        result.textContent = "You typed in " + (count) + " seconds";
        clearInterval(timeId)
    } else {
        result.textContent = "You typed incorrect sentence";
    }
})

resetBtn.addEventListener('click', function() {
    count = null;
    load.classList.remove('d-none');
    disp();
    load.classList.add('d-none');
    clearInterval(timeId);
    timing();
})