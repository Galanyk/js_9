const btnEl = document.querySelector('#btn');
const inputNameEl = document.querySelector('#inputName');
const inputLastNameEl = document.querySelector('#inputLastName');
const inputPhoneEl = document.querySelector('#inputTel');
const tableEl = document.querySelector('#table');

const containerEl = document.createElement('div');
tableEl.appendChild(containerEl);
containerEl.classList.add('item-wrapper');

btnEl.addEventListener("click", onClick);

function onClick() {
    const dataName = inputNameEl.value.trim();;
    const dataLastName = inputLastNameEl.value.trim();
    const dataPhone = inputPhoneEl.value.trim();

    if (isValueNameString(dataName) &&
        isValueNameString(dataLastName) &&
        isValuePhoneNumber(dataPhone)) {
        createElement(dataName, containerEl, 'div', 'item-tabl');
        createElement(dataLastName, containerEl, 'div', 'item-tabl');
        createElement(dataPhone, containerEl, 'div', 'item-tabl');

        clearValue(inputNameEl);
        clearValue(inputLastNameEl);
        clearValue(inputPhoneEl);

    } else {
        clearValue(inputNameEl);
        clearValue(inputLastNameEl);
        clearValue(inputPhoneEl);

        if (!isValueNameString(dataName)) {
            alert("Invalid Name");
        } else if (!isValueNameString(dataLastName)) {
            alert("Invalid Last Name");
        } else if (!isValuePhoneNumber(dataPhone)) {
            alert("Invalid Phone");
        }
    }
}

function createElement(title, container, tag, classList) {
    const element = document.createElement(tag);
    element.textContent = title;
    element.classList.add(classList);
    container.append(element);
}

function clearValue(element) {
    element.value = '';
}

function isValuePhoneNumber(dataPhone) {
    REGEXP_PHONE_NUMBER = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;
    return REGEXP_PHONE_NUMBER.test(dataPhone);
}

function isValueNameString(dataName) {
    REGEXP_NAME_STRING = /^[a-zA-Z_А-Яа-я-]*$/;
    return dataName && REGEXP_NAME_STRING.test(dataName);
}