const inputContainerTexts = document.querySelectorAll('.input-container--text');
const inputBoxes = document.querySelectorAll('.input-container-box');
const errorTexts = document.querySelectorAll('.input-container--error-text')

let firstNameValue;
let lastNameValue;

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
    inputBoxes[i].style.border = '2px solid #1360a0'
  })
}

for (let i = 0; i<inputBoxes.length; i++){
  inputBoxes[i].addEventListener('blur', function(e){
    inputContainerTexts[i].style.color = '#414141';
    inputBoxes[i].style.border = '1px solid black'

  })
}

inputBoxes[0].onkeyup = (e)=>{
  firstNameValue = e.target.value
  if(!firstNameValue){
    inputBoxes[0].blur()
    errorTexts[0].classList.add('input-container--error-text__active')
  }
  else if(errorTexts[0].classList.contains('input-container--error-text__active')){
    errorTexts[0].classList.remove('input-container--error-text__active')
  }
}

inputBoxes[1].onkeyup = (e)=>{
  lastNameValue = e.target.value
  if(!lastNameValue){
    inputBoxes[1].blur()
    errorTexts[1].classList.add('input-container--error-text__active')
  }
  else if(errorTexts[1].classList.contains('input-container--error-text__active')){
    errorTexts[1].classList.remove('input-container--error-text__active')
  }
}

const dropdownSelects = document.querySelectorAll('.dropdown--select')
const dropdownMenus = document.querySelectorAll('.dropdown-menu') 
const dropdownInputContainerTexts = document.querySelectorAll('.input-container--text__dropdown')
const arrows = document.querySelectorAll('.arrow-down')


dropdownSelects.forEach((dropdownSelect) => {
  dropdownSelect.addEventListener('mouseover', function(e){
    dropdownSelect.style.backgroundColor = '#1360a011';
  })
})

dropdownSelects.forEach((dropdownSelect) => {
  dropdownSelect.addEventListener('mouseout', function(e){
    dropdownSelect.style.backgroundColor = 'transparent';
  })
})

for(let i = 0; i<dropdownSelects.length; i++){
  dropdownSelects[i].addEventListener('focus', function(e){
    dropdownMenus[i].classList.add('dropdown-menu__active')
    dropdownInputContainerTexts[i].style.color = '#1360a0'
    dropdownSelects[i].style.border = '2px solid #1360a0'
    arrows[i].classList.add('arrow-down__rotate')


  })

  dropdownSelects[i].addEventListener('blur', function(e){  
    
    
    dropdownInputContainerTexts[i].style.color = '#414141';
    dropdownSelects[i].style.border = '1px solid black';
    arrows[i].classList.remove('arrow-down__rotate')


    if(e.relatedTarget === null || !e.relatedTarget.classList.contains('dropdown-menu')){
      dropdownMenus[i].classList.remove('dropdown-menu__active')
    }

    else{
      dropdownSelects[i].focus()
    }
  })
}

const selecteds = document.querySelectorAll('.selected')
const dropdownMenuChoicesLeft = dropdownMenus[0].querySelectorAll('.dropdown-menu--choice')
const dropdownMenuChoicesRight = dropdownMenus[1].querySelectorAll('.dropdown-menu--choice')

dropdownMenuChoicesLeft.forEach(choice => {
  choice.addEventListener('click', function(e){
    selecteds[0].innerHTML = choice.innerHTML
  })
})

dropdownMenuChoicesRight.forEach(choice => {
  choice.addEventListener('click', function(e){
    selecteds[1].innerHTML = choice.innerHTML
  })
})