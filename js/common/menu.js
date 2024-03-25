function changeSvgStroke(element, color) {
    const header = element.closest('.header');
    const svgs = header.find('.header__inner').find('svg');

    svgs.each(function() {
        $(this).find('path').css('stroke', color);
    });
}


$(document).ready(function() {
    const links = $(".header__nav-link");
    const header = $(".header")
    const fullMenus = $(".full-menu")

    links.on("click", function(e) {
        header.addClass('active');
        fullMenus.removeClass('opened');
        // Проверяем, есть ли атрибут data-submenu у кликнутого элемента
        const linkID = $(this).attr('id');
        if (linkID) {
            // Открываем подменю с соответствующим id
            $(`.full-menu[data-submenu=${linkID}]`).addClass('opened');
        }
        // Вызываем функцию для изменения цвета обводки SVG
        changeSvgStroke(header, '#141414')
        $("body").css("overflow", "hidden");
    });
    
    $(window).on("click", function(event) {
        if (!$(event.target).closest('.header').length) {
            header.removeClass('active');
            fullMenus.removeClass('opened');
            changeSvgStroke(header, '#fff'); 
            $("body").css("overflow", "auto");
        }

    
    });

    // РАСКРЫВАЮЩЕЕСЯ МЕНЮ

    const subLinks = $(".full-menu__item");
    const subItems = $('.full-menu__subitems-grid')

    subLinks.on("mouseenter", function() {
        subItems.removeClass('opened');
        // Проверяем, есть ли атрибут data-submenu у кликнутого элемента
        const subLinkId = $(this).attr('id');
        if (subLinkId) {
            // Открываем подменю с соответствующим id
            $(`.full-menu__subitems-grid[data-subitems=${subLinkId}]`).addClass('opened');
        }
    });

    fullMenus.on("mouseleave", function() {
        if (!header.is(":hover")) {
            header.removeClass('active');
            fullMenus.removeClass('opened');
            changeSvgStroke(header, '#fff'); 
            $("body").css("overflow", "auto");
        }
    });
});

