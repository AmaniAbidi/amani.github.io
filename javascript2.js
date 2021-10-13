"use strict"

$(function() {
    let circuleOpacityTimer;

    $('.start').on('click', function() {
        let circulesNumber = parseInt($('#set-circules-count').val());
        if(circulesNumber <= 0) {
            return;
        }

        while(circulesNumber-- > 0) {
            createCircule();
        }

        $('.circule').css({
            "width": parseInt($('#set-width').val()),
            "height": parseInt($('#set-width').val())
        });
    });

    $(document).on('mouseenter', '.circule', function() {
        circuleOpacityTimer = setInterval(opactiy, 400, $(this));
    });

    $(document).on('mouseleave', '.circule', function() {
        $(this).css("opacity", '100%');
        clearInterval(circuleOpacityTimer);
    });

    function createCircule() {
        let createdElement;
        let circulesWidth = $('.circules').width();

        createdElement = $("<div class='circule'><div>");
        createdElement.css("background-color", getRandomColor());
        createdElement.css("left", Math.floor(circulesWidth * Math.random()));
        createdElement.appendTo(".circules");

        let circuleCreationTimer = setInterval(grow, parseInt($('#set-growth-rate').val()), createdElement);
        createdElement.click(() => {
            createdElement.remove();
            clearInterval(circuleCreationTimer);
        });
    }

    function grow(element) {
        element.css('height', element.height() + parseInt($('#set-growth-amount').val()));
        element.css('width', element.width() + parseInt($('#set-growth-amount').val()));
    }

    function opactiy(element) {
        element.css("opacity", (index, value) => value * 0.8);
    }

    
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
