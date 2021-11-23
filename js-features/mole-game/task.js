let holes = [];
let holesQuantity = 9;

const deadStatus = document.getElementById('dead');
const lostStatus = document.getElementById('lost');

const getHole = index => {
    for (i = 1; i = index; i++) {
        holes.push(document.getElementById(`hole${index}`));
        index--;
    }
}
getHole(holesQuantity);

for (let item of holes) {
    item.onclick = () => {
        let deadStatusValue = parseInt(deadStatus.textContent, 10);
        let lostStatusValue = parseInt(lostStatus.textContent, 10);
        
        if (item.className === 'hole hole_has-mole') {
            deadStatusValue++;
            deadStatus.textContent = `${deadStatusValue}`;

            if (deadStatusValue >= 10) {
                restartGame('Победа!');
            }
        } else {
            lostStatusValue++;
            lostStatus.textContent = `${lostStatusValue}`;
            
            if (lostStatusValue >= 5) {
                restartGame('Вы проиграли!');
            }
        }
    }
}

const restartGame = alertText => {
    deadStatus.textContent = '0';
    lostStatus.textContent = '0';
    alert(alertText);
    
}


