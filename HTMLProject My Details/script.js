let firstBtn = document.querySelector('button');
firstBtn.addEventListener('click', inputMsg);

function inputMsg() {
    let name = prompt('Enter name of student');
    firstBtn.textContent = 'Roll No 1 :' + name;
}