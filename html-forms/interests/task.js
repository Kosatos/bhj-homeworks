// class Checkbox {
//     constructor (checkboxFormClass, checkboxClass, checkboxGroupClass) {
//         this.checkboxForm = document.querySelector(checkboxFormClass);
//         this.checkBoxes = [...this.checkboxForm.querySelectorAll(checkboxClass)];
//         this.checkboxGroup = [...this.checkboxForm.querySelectorAll(checkboxGroupClass)];

//         this.checkStatus(checkboxClass);
//     }
    
//     checkStatus = (checkboxClass) => {
//         this.checkboxGroup.forEach(element => {
//             const mainInterest = element.querySelector(checkboxClass);
//             const activeInterests = [...element.querySelectorAll(checkboxClass)];

//             console.log(mainInterest)
//             console.log(activeInterests)
            
//             this.checkBoxes.forEach(checkbox=> {
//                 checkbox.addEventListener('change', () => {
//                     console.log(checkbox.checked)
//                     if (activeInterests.every(item => item.checked = true)) {
//                         mainInterest.checked = true
//                     } else if (mainInterest.checked = true) {
//                         activeInterests.forEach(item => item.checked = true)
//                     }
//                 })
//             })
//         })
//     }
// }

// const interestsCheckbox = new Checkbox('.interests_main', '.interest__check', '.interest')
const interests = [...document.querySelectorAll('.interest')];

interests.forEach(element => {
    let checkboxes = [...element.querySelectorAll('interest__check')];
    let bottomCheckboxes = checkboxes.filter(item => item.closest('.interests').contains('interests_active'));

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            console.log(checkbox.checked)
            if (bottomCheckboxes.every(el => el.checked === true)) {
                checkboxes[0] = true;
            }
        })
    })
})