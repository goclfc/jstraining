const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('#first');


btns[0].addEventListener('click',()=>{
    // if (!btns[1].classList.contains('red')){
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
})
console.log(btns[0].className);
wrapper.addEventListener('click', (event)=>{
    
    if (event.target && event.target.tagName == "BUTTON"){
        console.dir(event.target);
    }
})

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);