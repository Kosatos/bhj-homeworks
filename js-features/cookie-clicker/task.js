const cookieClicker = document.getElementById('cookie');
const clickerStatus = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed-value');

let clickerStatusValue = parseInt(clickerStatus.textContent, 10);
let firstClickTime = new Date().getTime();
let secondClickTime = new Date().getTime();


cookieClicker.onclick = () => {
    ++clickerStatusValue;
    // clickerStatusValue % 2 !== 0 ? cookieClicker.width = 300 : cookieClicker.width = 200;
    if (clickerStatusValue % 2 !== 0) {
        cookieClicker.width = 300;
        firstClickTime = new Date().getTime();
    } else {
        cookieClicker.width = 200;
        secondClickTime = new Date().getTime();
    }
    clickerStatus.textContent = `${clickerStatusValue}`;
    clickerSpeed.textContent = `${firstClickTime}`;

    secondClickTime > firstClickTime ? clickerSpeed.textContent = `${(secondClickTime - firstClickTime) / 1000}` : clickerSpeed.textContent = `${(firstClickTime - secondClickTime) / 1000}`;
}
