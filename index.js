document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.line-buttons');

    buttons.forEach(button => {
        const buttonWidth = button.offsetWidth;
        
        button.style.setProperty('--button-width', `${buttonWidth}px`);

        button.addEventListener('mouseenter', () => {
            button.classList.add('hover');
        });

        button.addEventListener('mouseleave', () => {
            button.classList.remove('hover');
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.line-buttons');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const submenu = this.nextElementSibling;
            submenu.classList.toggle('show');
            
            // 다른 열린 서브메뉴 닫기
            buttons.forEach(otherButton => {
                if (otherButton !== button) {
                    const otherSubmenu = otherButton.nextElementSibling;
                    otherSubmenu.classList.remove('show');
                }
            });
        });
    });

    // 메뉴 외 영역 클릭 시 서브메뉴 닫기
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.menu-item')) {
            const submenus = document.querySelectorAll('.submenu');
            submenus.forEach(submenu => submenu.classList.remove('show'));
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const projatMake = document.querySelector('.projat-make');

    projatMake.addEventListener('mouseenter', function() {
        this.classList.add('hover');
    });

    projatMake.addEventListener('mouseleave', function() {
        this.classList.remove('hover');
    });
});