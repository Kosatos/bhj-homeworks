const images = [...document.querySelectorAll('.slider__item')];
const arrows = document.querySelectorAll('.slider__arrow');
const dots = [...document.querySelectorAll('.slider__dot')];

let itemIndex;

// Поиск индекса активного слайда

const findIndex = () => {
    images.forEach(image => {
        if (image.classList.contains('slider__item_active')) {
            itemIndex = parseInt(images.indexOf(image), 10);
        }
    })
}

// Регистрация обработчиков события на стрелки

arrows.forEach(arrow => {
    if (arrow.classList.contains('slider__arrow_prev')) {
        arrow.onclick = () => {
            changeImagePrev();
            console.log(itemIndex)
        }
    } else if (arrow.classList.contains('slider__arrow_next')) {
        arrow.onclick = () => {
            changeImageNext();
            console.log(itemIndex)
        }
    }
})

// Регистрация обработчиков события на точки

dots.forEach(dot => {
    dot.onclick = () => {
        resetImageClass();

        dot.classList.toggle('slider__dot_active');
        images[dots.indexOf(dot)].classList.toggle('slider__item_active');

        findIndex();
    }
})

// Смена слайда на предыдущий

const changeImagePrev = () => {
    if (itemIndex > 0) {
        itemIndex--;
    } else {
        itemIndex = images.length - 1;
    }

    resetImageClass();
    images[itemIndex].classList.toggle('slider__item_active');
    dots[itemIndex].classList.toggle('slider__dot_active');
}

// Смена слайда на следующий

const changeImageNext = () => {
    if (itemIndex < images.length - 1) {
        itemIndex++;
    } else {
        itemIndex = 0;
    }

    resetImageClass();
    images[itemIndex].classList.toggle('slider__item_active');
    dots[itemIndex].classList.toggle('slider__dot_active');
}

// Сброс класса активного слайда

const resetImageClass = () => {
    images.forEach(image => {
        image.classList.remove('slider__item_active');
    });

    dots.forEach(dot => {
        dot.classList.remove('slider__dot_active');
    });
}