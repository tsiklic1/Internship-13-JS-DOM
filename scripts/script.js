// const testInput = document.querySelectorAll('.input-container-box')[0];
// console.log(testInput)
// testInput.style.backgroundColor = 'blue';

// testInput.addEventListener('mouseover', function(e){
//   // this.classList.add('back-red')
//   testInput.style.backgroundColor = 'red'
// })

const inputContainerTexts = document.querySelectorAll('.input-container--text');
// for (let i = 0; i<inputContainerTexts.length; i++){
//   inputContainerTexts[i].addEventListener('click', function(e){
//     console.log(inputContainerTexts[i]);
//     inputContainerTexts[i].style.color = 'red';
//   })
// }


const inputBoxes = document.querySelectorAll('.input-container-box');

inputBoxes.forEach((inputBox) => (inputBox.defaultValue = 'User'))

inputBoxes.forEach((inputBox) => {
  inputBox.addEventListener('mouseover', function(e){
    inputBox.style.backgroundColor = '#1360a011';
  })
})

inputBoxes.forEach((inputBox) => {
  inputBox.addEventListener('mouseout', function(e){
    inputBox.style.backgroundColor = 'transparent';
  })
})

for (let i = 0; i<inputBoxes.length; i++){
  inputBoxes[i].addEventListener('focus', function(e){
    inputBoxes[i].style.outlineColor = '#1360a0'
    inputContainerTexts[i].style.color = '#1360a0';
  })
}

for (let i = 0; i<inputBoxes.length; i++){
  inputBoxes[i].addEventListener('blur', function(e){
    inputContainerTexts[i].style.color = '#414141';
  })
}

// const dropdowns = document.querySelectorAll('.dropdown');
const inputBoxDropdowns = document.querySelectorAll('.input-container-box__dropdown')
console.log(inputBoxDropdowns)

const dropdownMenus = document.querySelectorAll('.dropdown-menu') 



for(let i = 0; i<inputBoxDropdowns.length; i++){
  inputBoxDropdowns[i].addEventListener('focus', function(e){
    inputBoxDropdowns[i].style.border = '2px solid #1360a0'
    dropdownMenus[i].classList.add('dropdown-menu__active')

  })
}

for(let i = 0; i<inputBoxDropdowns.length; i++){
  inputBoxDropdowns[i].addEventListener('blur', function(e){
    inputBoxDropdowns[i].style.border = '1px solid black'
    dropdownMenus[i].classList.remove('dropdown-menu__active')

  })
}
