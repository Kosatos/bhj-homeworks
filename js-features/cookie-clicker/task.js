const cookieClicker = document.getElementById('cookie');
const clickerStatus = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed-value');
const startTime = Date.now();
let clickTIme;

let clickerStatusValue = parseInt(clickerStatus.textContent, 10);

cookieClicker.onclick = () => {
    ++clickerStatusValue;
    clickerStatus.textContent = `${clickerStatusValue}`;

    clickerStatusValue % 2 !== 0 ? cookieClicker.width = 300 : cookieClicker.width = 200;
    
    clickerSpeed.textContent = (((Date.now() - startTime) / 1000) / clickerStatusValue).toFixed(2);
}
