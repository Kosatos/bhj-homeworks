// const menus = document.querySelectorAll('.menu');
// const subMenus = document.querySelectorAll('.menu_sub');

// const hangHandler = () => {
//     menus.forEach(menu => {
//         menu.querySelectorAll('.menu__link').forEach(link => {
//             link.onclick = clickLink.bind(link);
//         })
//     })
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
//     subMenus.forEach(element => {
//       if (currentSubMenu !== element && element.classList.contains('menu_active')) {
//         element.classList.remove('menu_active');
//       }
//     });
//     currentSubMenu.classList.toggle('menu_active');
//   };

//   hangHandler();


class Menu {
    constructor(menuSelector) {
        this.menu = document.querySelector(menuSelector);
        this.links = this.menu.querySelectorAll('.menu__link');
        this.subMenus = this.menu.querySelectorAll('.menu_sub');

        this.links.forEach(link => {
            link.addEventListener('click', this.clickLink);
        });
    } 
    
    clickLink = (link) => {
        let parent = link.target.closest('.menu__item');
        let subMenu = parent.querySelector('.menu_sub');
        
        if (subMenu) {
            link.preventDefault();
            this.changeMenuClass(subMenu);
        }
    }
    
    changeMenuClass = (currentSubMenu) => {
        this.subMenus.forEach(element => {
          if (currentSubMenu !== element && element.classList.contains('menu_active')) {
            element.classList.remove('menu_active');
          }
        });
        currentSubMenu.classList.toggle('menu_active');
    }    
}


const firstMenu = new Menu('.menu_main');
const secondMenu = new Menu('.menu_additional');


  
