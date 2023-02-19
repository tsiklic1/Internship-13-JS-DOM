const inputContainerTexts = document.querySelectorAll(".input-container--text");
const inputBoxes = document.querySelectorAll(".input-container-box");
const errorTexts = document.querySelectorAll(".input-container--error-text");

let firstNameValue;
let lastNameValue;
let selectedLevel;
let selectedYears;
let key = 0;

inputBoxes.forEach((inputBox) => (inputBox.defaultValue = "User"));

inputBoxes.forEach((inputBox) => {
  inputBox.addEventListener("mouseover", function (e) {
    if (inputBox !== document.activeElement) {
      inputBox.style.backgroundColor = "#1360a011";
    }
  });
});

inputBoxes.forEach((inputBox) => {
  inputBox.addEventListener("mouseout", function (e) {
    if (inputBox !== document.activeElement) {
      inputBox.style.backgroundColor = "transparent";
    }
  });
});

for (let i = 0; i < inputBoxes.length; i++) {
  inputBoxes[i].addEventListener("focus", function (e) {
    inputBoxes[i].style.outlineColor = "#1360a0";
    inputContainerTexts[i].style.color = "#1360a0";
    inputBoxes[i].style.border = "2px solid #1360a0";

    styleBackgroundColorOfInput(inputBoxes[i], e.target.value.length);
  });
}

for (let i = 0; i < inputBoxes.length; i++) {
  inputBoxes[i].addEventListener("blur", function (e) {
    inputContainerTexts[i].style.color = "#414141";
    inputBoxes[i].style.border = "1px solid black";
    inputBoxes[i].style.backgroundColor = "transparent";
  });
}

inputBoxes[0].onkeyup = (e) => {
  firstNameValue = e.target.value;
  if (firstNameValue.length) {
    errorTexts[0].classList.remove("input-container--error-text__active");
  }
  styleBackgroundColorOfInput(inputBoxes[0], e.target.value.length);
};

inputBoxes[1].onkeyup = (e) => {
  lastNameValue = e.target.value;
  if (lastNameValue.length) {
    errorTexts[1].classList.remove("input-container--error-text__active");
  }
  styleBackgroundColorOfInput(inputBoxes[1], e.target.value.length);
};

function styleBackgroundColorOfInput(inputBox, targetValueLength) {
  if (inputBox === document.activeElement && targetValueLength >= 4) {
    inputBox.style.backgroundColor = "lime";
  } else if (inputBox === document.activeElement && targetValueLength === 0) {
    inputBox.style.backgroundColor = "pink";
  } else {
    inputBox.style.backgroundColor = "transparent";
  }
}

const dropdownSelects = document.querySelectorAll(".dropdown--select");
const dropdownMenus = document.querySelectorAll(".dropdown-menu");
const dropdownInputContainerTexts = document.querySelectorAll(
  ".input-container--text__dropdown"
);
const arrows = document.querySelectorAll(".arrow-down");

dropdownSelects.forEach((dropdownSelect) => {
  dropdownSelect.addEventListener("mouseover", function (e) {
    dropdownSelect.style.backgroundColor = "#1360a011";
  });
});

dropdownSelects.forEach((dropdownSelect) => {
  dropdownSelect.addEventListener("mouseout", function (e) {
    dropdownSelect.style.backgroundColor = "transparent";
  });
});

for (let i = 0; i < dropdownSelects.length; i++) {
  dropdownSelects[i].addEventListener("focus", function (e) {
    dropdownMenus[i].classList.add("dropdown-menu__active");
    dropdownInputContainerTexts[i].style.color = "#1360a0";
    dropdownSelects[i].style.border = "2px solid #1360a0";
    arrows[i].classList.add("arrow-down__rotate");
  });

  dropdownSelects[i].addEventListener("blur", function (e) {
    dropdownInputContainerTexts[i].style.color = "#414141";
    dropdownSelects[i].style.border = "1px solid black";
    arrows[i].classList.remove("arrow-down__rotate");

    if (
      e.relatedTarget === null ||
      !e.relatedTarget.classList.contains("dropdown-menu")
    ) {
      dropdownMenus[i].classList.remove("dropdown-menu__active");
    } else {
      dropdownSelects[i].focus();
    }
  });
}

const selecteds = document.querySelectorAll(".selected");
const dropdownMenuChoicesLeft = dropdownMenus[0].querySelectorAll(
  ".dropdown-menu--choice"
);
const dropdownMenuChoicesRight = dropdownMenus[1].querySelectorAll(
  ".dropdown-menu--choice"
);


let content = document.querySelector("#content");

const localStorageItems = { ...localStorage };
const localStorageObjectStrings = Object.values(localStorageItems);
const localStorageObjects = localStorageObjectStrings.map((objectString) =>
  JSON.parse(objectString)
);
localStorageObjects.forEach((localStorageObject) => {
  content.innerHTML +=
    localStorageObject.firstNameValue +
    " " +
    localStorageObject.lastNameValue +
    ", " +
    localStorageObject.selectedLevel +
    ", " +
    localStorageObject.selectedYears +
    "<br>";
});

const clickedChoicesLeft = [];
const clickedChoicesRight = [];

function styleClickedChoice(clickedChoices, choice) {
  if (clickedChoices.length) {
    if (clickedChoices[0].classList.contains("dropdown-menu--choice__clicked"))
      clickedChoices[0].classList.remove("dropdown-menu--choice__clicked");
    clickedChoices.pop();
  }
  clickedChoices.push(choice);
  choice.classList.add("dropdown-menu--choice__clicked");
}

dropdownMenuChoicesLeft.forEach((choice) => {
  choice.addEventListener("click", function (e) {
    selecteds[0].innerHTML = choice.innerHTML;
    styleClickedChoice(clickedChoicesLeft, choice);
  });
});

dropdownMenuChoicesRight.forEach((choice) => {
  choice.addEventListener("click", function (e) {
    selecteds[1].innerHTML = choice.innerHTML;
    styleClickedChoice(clickedChoicesRight, choice);
  });
});

const saveChangesButton = document.querySelector("#saveChanges");
saveChangesButton.addEventListener("click", function (e) {
  firstNameValue = inputBoxes[0].value;
  lastNameValue = inputBoxes[1].value;
  selectedLevel = document.querySelector("#selected-level").innerHTML;
  selectedYears = document.querySelector("#selected-years").innerHTML;

  const user = {
    firstNameValue,
    lastNameValue,
    selectedLevel,
    selectedYears,
  };

  if (!user.firstNameValue) {
    errorTexts[0].classList.add("input-container--error-text__active");
    inputBoxes[0].style.borderColor = "#b30000";
    return;
  }

  if (!user.lastNameValue) {
    errorTexts[1].classList.add("input-container--error-text__active");
    inputBoxes[1].style.borderColor = "#b30000";
    return;
  }

  if (localStorage.length) {
    let maxKey = -1;
    for (let i = 0; i < localStorage.length; i++) {
      if (+localStorage.key(i) > maxKey) {
        maxKey = +localStorage.key(i);
      }
    }
    key = maxKey + 1;
  }
  localStorage.setItem(JSON.stringify(key), JSON.stringify(user));

  content.innerHTML +=
    user.firstNameValue +
    " " +
    user.lastNameValue +
    ", " +
    user.selectedLevel +
    ", " +
    user.selectedYears +
    "<br>";
});
