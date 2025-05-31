let redCount = 0;
let greenCount = 0;
let blueCount = 0;

document.getElementById('redBtn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';
    redCount++;
    document.getElementById('redCount').textContent = 'RED count: ' + redCount;
});

document.getElementById('greenBtn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
    greenCount++;
    document.getElementById('greenCount').textContent = 'GREEN count: ' + greenCount;
});

document.getElementById('blueBtn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
    blueCount++;
    document.getElementById('blueCount').textContent = 'BLUE count: ' + blueCount;
});
