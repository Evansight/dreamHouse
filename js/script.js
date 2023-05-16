$(document).ready(function (){
    $('.hero-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll:1,
        centerMode: true,
        variableWidth: true,
        dots: false,
        arrows: false
    });

    $('.recommendations-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        infinite: true,
        dots: false,
        arrows: true,
        appendArrows: '.arrow-wrapper',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,

                }
            },
        ]
    });

    $(".filter li").on('click', function(){
        var filter = $(this).data('filter');
        $(".recommendations-slider").slick('slickUnfilter');

        if(filter == 'villa'){
            $(".recommendations-slider").slick('slickFilter','.villa');
        }
        else if(filter == 'apartment'){
            $(".recommendations-slider").slick('slickFilter','.apartment');
        }
        else if(filter == 'house'){

            $(".slider").slick('slickUnfilter');
        }
        $(".filter li").removeClass('active');
        $(this).addClass("active");
    });



// Open Popup on Element Click
    const elements = document.querySelectorAll('.element');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    const slider = $('.gallery-slider');

    elements.forEach((element) => {
        element.addEventListener('click', () => {
            popup.style.display = 'block';
            slider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                infinite: true,
                variableWidth: true,
            });
        });
    });

    $('.element[data-slide]').click(function(e) {
        e.preventDefault();
        let slideno = $(this).data('slide');
        slider.slick('slickGoTo', slideno);
    });

// Close Popup and Destroy Slider
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
        slider.slick('unslick');
    });

``
    $('.review-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        dots: true,
        arrows: false,
        variableWidth: true
    });

})

