const buttons =  document.querySelectorAll('[data-carousel-button]');
buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        const offset = button.dataset.carouselButton==='next'? 1:-1;
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]');
        const activeSlide = slides.querySelector('[data-active]');
        const array=[...slides.children];
        const currentIndex=array.indexOf(activeSlide);
        let newIndex = currentIndex+offset;
        if(newIndex<0) newIndex=array.length-1;
        if(newIndex>=array.length) newIndex=0;
        array[newIndex].setAttribute('data-active','');
        array[currentIndex].removeAttribute('data-active');
    })
})