window.addEventListener('DOMContentLoaded',()=>{
    alert ("asd");
    const   tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent'),
            tabsParent = document.querySelector('.tabheader__items');
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        
        })
    }
    hideTabContent();
})