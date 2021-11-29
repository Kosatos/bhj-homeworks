const images = [...document.querySelectorAll(".slider__item")];
const arrows = document.querySelectorAll(".slider__arrow");
const dots = [...document.querySelectorAll(".slider__dot")];

// let itemIndex;

// // Поиск индекса активного слайда

// const findItemIndex = () => {
//     itemIndex = images.findIndex(image => image.classList.contains('slider__item_active'));
// }

// // Регистрация обработчиков события на стрелки

// arrows.forEach(arrow => {
//     if (arrow.classList.contains('slider__arrow_prev')) {
//         arrow.onclick = () => {
//             changeImagePrev();
//             console.log(itemIndex)
//         }
//     } else if (arrow.classList.contains('slider__arrow_next')) {
//         arrow.onclick = () => {
//             changeImageNext();
//             console.log(itemIndex)
//         }
//     }
// })

// // Регистрация обработчиков события на точки

// dots.forEach(dot => {
//     dot.onclick = () => {
//         resetImageClass();

//         dot.classList.toggle('slider__dot_active');
//         images[dots.indexOf(dot)].classList.toggle('slider__item_active');

//         findItemIndex();
//     }
// })

// // Смена слайда на предыдущий

// const changeImagePrev = () => {
//     if (itemIndex > 0) {
//         itemIndex--;
//     } else {
//         itemIndex = images.length - 1;
//     }

//     resetImageClass();
//     images[itemIndex].classList.toggle('slider__item_active');
//     dots[itemIndex].classList.toggle('slider__dot_active');
// }

// // Смена слайда на следующий

// const changeImageNext = () => {
//     if (itemIndex < images.length - 1) {
//         itemIndex++;
//     } else {
//         itemIndex = 0;
//     }

//     resetImageClass();
//     images[itemIndex].classList.toggle('slider__item_active');
//     dots[itemIndex].classList.toggle('slider__dot_active');
// }

// // Сброс класса активного слайда

// const resetImageClass = () => {
//     images.forEach(image => {
//         image.classList.remove('slider__item_active');
//     });

//     dots.forEach(dot => {
//         dot.classList.remove('slider__dot_active');
//     });
// }

// ВАРИАНТ 2

const findItemIndex = () => {
	return images.findIndex((image) =>
		image.classList.contains("slider__item_active")
	);
};

arrows.forEach((arrow) => {
    let itemIndex;

	if (arrow.classList.contains("slider__arrow_prev")) {
		arrow.onclick = () => {
            itemIndex = findItemIndex();

			if (itemIndex > 0) {
				itemIndex--;
			} else {
				itemIndex = images.length - 1;
			}

			showActiveImage(itemIndex);
		};
	} else if (arrow.classList.contains("slider__arrow_next")) {
		arrow.onclick = () => {
            itemIndex = findItemIndex();

			if (itemIndex < images.length - 1) {
				itemIndex++;
			} else {
				itemIndex = 0;
			}

			showActiveImage(itemIndex);
		};
	}
});

dots.forEach((dot) => {
	dot.onclick = () => {
		dot.classList.toggle("slider__dot_active");
		const dotIndex = dots.indexOf(dot);

		showActiveImage(dotIndex);
	};
});

const showActiveImage = (index) => {
	resetImageClass();
	images[index].classList.toggle("slider__item_active");
	dots[index].classList.toggle("slider__dot_active");
};

const resetImageClass = () => {
	images.forEach((image) => {
		image.classList.remove("slider__item_active");
	});

	dots.forEach((dot) => {
		dot.classList.remove("slider__dot_active");
	});
};
