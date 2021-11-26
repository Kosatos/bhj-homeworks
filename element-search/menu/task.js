const hangHandler = (menuSelector) => {
    menu = document.querySelector(menuSelector);
    links = menu.querySelectorAll('.menu__link');
    subMenus = menu.querySelectorAll('.menu_sub');

    links.forEach(link => {
        link.onclick = clickLink.bind(link);
    });
}

function clickLink() { 
    let parent = this.closest('.menu__item');
    let subMenu = parent.querySelector('.menu_sub');

    if (subMenu) {
        changeMenuClass(subMenu);
        return false;
    }
}

const changeMenuClass = (currentSubMenu) => {
    // subMenus.forEach(element => {
    //   if (currentSubMenu !== element && element.classList.contains('menu_active')) {
    //     element.classList.remove('menu_active');
    //   }
    // });
    closeMenu();
    currentSubMenu.classList.toggle('menu_active');
  };

const closeMenu = () => {
    subMenus.forEach(element => {
        element.classList.remove('menu_active');
    });
}

  hangHandler('.menu_main');
  hangHandler('.menu_additional');


// class Menu {
//     constructor(menuSelector) {
//         this.menu = document.querySelector(menuSelector);
//         this.links = this.menu.querySelectorAll('.menu__link');
//         this.subMenus = this.menu.querySelectorAll('.menu_sub');

//         this.links.forEach(link => {
//             link.onclick = clickLink.bind(this);
//         });
//     }    
// }

// function clickLink() {
//     let parent = this.closest('.menu__item');
//     let subMenu = parent.querySelector('.menu_sub');
    
//     if (subMenu) {
//         changeMenuClass(subMenu);
//         return false;
//     }
// }

// const changeMenuClass = (currentSubMenu) => {
//     this.subMenus.forEach(element => {
//       if (currentSubMenu !== element && element.classList.contains('menu_active')) {
//         element.classList.remove('menu_active');
//       }
//     });
//     currentSubMenu.classList.toggle('menu_active');
// }

// const firstMenu = new Menu('.menu_main');
// const secondMenu = new Menu('.menu_additional');


  
