let num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const r = document.getElementById('res')
console.log(num1 + num2);
const btn = document.querySelector('button')

btn.addEventListener('click', function () {
    const result = ((num1.value / 100) * num2.value);
    if (result !== 0) {

        r.value = result
        r.style.display = 'block';
        r.style.width = "20%"
        r.style.marginLeft = '-30%'
    }

})