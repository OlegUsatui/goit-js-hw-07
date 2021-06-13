const inputEl = document.querySelector('#validation-input');

const length = inputEl.dataset.length;

inputEl.addEventListener('blur', (element) => {
    const val = element.currentTarget.value;

    if (val.length == length) {
        if (element.currentTarget.classList.contains('invalid')) {
            element.currentTarget.classList.remove('invalid')
        }
        inputEl.classList.add('valid')
    } else {
        if (element.currentTarget.classList.contains('valid')) {
            element.currentTarget.classList.remove('valid')
        }
        element.currentTarget.classList.add('invalid');
    }
});