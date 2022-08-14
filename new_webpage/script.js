let l1 = document.getElementById('l1');
let l2 = document.getElementById('l2');
let l3 = document.getElementById('l3');
let l4 = document.getElementById('l4');
let l5 = document.getElementById('l5');
let l6 = document.getElementById('l6');
let l7 = document.getElementById('l7');
let l8 = document.getElementById('l8');
let l9 = document.getElementById('l9');
let quote = document.getElementById('quotediv');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    l1.style.top = value * 0.1 + 'px';
    l2.style.top = value * 0.2 + 'px'
    l3.style.top = value * 0.3 + 'px'
    l4.style.top = value * 0.4 + 'px'
    l5.style.top = value * 0.5 + 'px'
    l6.style.top = value * 0.6 + 'px'
    l7.style.top = value * 0.7 + 'px'
    l8.style.top = value * 0.8 + 'px'
    l9.style.top = value * 0.9 + 'px'
    quote.style.marginTop = value * 1.3 + 'px'
    console.log(value);
})