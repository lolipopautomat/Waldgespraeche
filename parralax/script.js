let leaves = document.getElementById('leaves');
let l3 = document.getElementById('l3');
let quote = document.getElementById('quotediv');
let l2 = document.getElementById('l2');
let l1 = document.getElementById('l1');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    leaves.style.objectPosition = value * 0.01 + '%';
    leaves.style.top = value * 1 - 200 + 'px';
    l1.style.top = value * 0.09 + 'px';
    l2.style.top = value * 0.5 + 'px'
    l3.style.top = value * 0.7 + 'px'
    quote.style.marginTop = value * 1.3 + 'px'

})