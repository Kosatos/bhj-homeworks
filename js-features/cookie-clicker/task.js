const cookieClicker = document.getElementById('cookie');
const clickerStatus = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed-value');

let clickerStatusValue = parseInt(clickerStatus.textContent, 10);
let clickTime = Date.now();

cookieClicker.onclick = () => {
    ++clickerStatusValue;
    clickerStatus.textContent = `${clickerStatusValue}`;

    clickerStatusValue % 2 !== 0 ? cookieClicker.width = 300 : cookieClicker.width = 200;

    clickerSpeed.textContent = (1/((Date.now() - clickTime)/1000)).toFixed(2);
    clickTime = Date.now();
}
