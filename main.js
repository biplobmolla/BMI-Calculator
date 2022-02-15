const check = document.getElementById('check');
check.addEventListener('click', () => {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const display = document.getElementById('display-result');
    let BMI = weight / (height ** 2);
    display.innerText = BMI;
});

document.getElementById('height').addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        const weight = document.getElementById('weight').value;
        const height = document.getElementById('height').value;
        const display = document.getElementById('display-result');
        let BMI = weight / (height ** 2);
        display.innerText = BMI;
    }
});