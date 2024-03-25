
$(document).ready(function() {
    // ОТКРЫТИЕ ЗАКРЫТИЕ
    const searchesButtons = $(".search");
    const searchesModals = $(".search-modal")
    const searchesClose = $('.search-modal__close')

    const searchResults = $('.search-result')
    const searchResultItems = $('.search-result').find('.search-result__item')

    searchesButtons.on("click", function() {
        const searchID = $(this).attr('id');
        if (searchID) {
            // Открываем подменю с соответствующим id
            $(`.search-modal[data-search-modal=${searchID}]`).addClass('opened');
        }
        $("body").css("overflow", "hidden");
    });
    
    searchesClose.on("click", function() {
        searchesModals.each(function(event) {
            searchResults.removeClass('opened')
            searchResultItems.removeClass('opened')
            // Закрываем все модальные окна, кроме текущего
            if (!$(this).is($(event.currentTarget))) {
                $(this).removeClass('opened');
            } else {
                // Проверяем, находится ли внутри текущего модального окна input в состоянии фокуса
                if (!$(this).find('input').is(':focus')) {
                    $(this).removeClass('opened');
                }
            }
        });

        $("body").css("overflow", "auto");
    });


    // ПОИСК

    $('.search-modal__input').on('input', function() {
        // Получаем значение из инпута
        var inputValue = $(this).val().trim().toLowerCase();

        // Находим ближайший элемент с классом .search-result
        const searchResult = $(this).closest('.search-modal').find('.search-result');

        // Проверяем, содержит ли инпут текст
        if (inputValue !== '') {
            searchResult.addClass('opened');

            // Находим все элементы с классом .search-result__item внутри .search-result
            const items = searchResult.find('.search-result__item');


            searchResultItems.removeClass('opened')

            // Фильтруем элементы, оставляем только те, которые начинаются с введенной строки
            const filteredItems = items.filter(function() {
                return $(this).find('.name').text().trim().toLowerCase().startsWith(inputValue);
            });

            filteredItems.addClass('opened');
        } else {
            // Если инпут пуст, убираем класс opened
            searchResult.removeClass('opened');
            searchResult.find('.search-result__item').removeClass('opened');
        }
    });
});


