const ligarButton = document.getElementById('ligarButton');
const desligarButton = document.getElementById('desligarButton');
const restartButton = document.getElementById('restartButton');
const producaoDisplay = document.getElementById('producaoDisplay');

var urlPost = 'https://leanwebsensorserver.onrender.com/chaves'
var urlGet = 'https://leanwebsensorserver.onrender.com/producao'

ligarButton.addEventListener('click', () => {
    let requestData = {"liga": 1, "desliga": 0, "restart": 0}
    sendRequest(requestData)
});

desligarButton.addEventListener('click', () => {
    let requestData = {"liga": 0, "desliga": 1, "restart": 0}
    sendRequest(requestData)
});

restartButton.addEventListener('click', () => {
    let requestData = {"liga": 0, "desliga": 0, "restart": 1}
    sendRequest(requestData)
});

function sendRequest(data){
    fetch(urlPost, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

function receiverRequest(){
    fetch(urlGet, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => {
        console.log(data["sensor"])
        producaoDisplay.textContent = data["sensor"];
    })
}

setInterval(receiverRequest, 2000)