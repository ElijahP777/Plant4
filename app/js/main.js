$(function () {
 
    $('.cards').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
                    dots: false,
                    arrows: true,
                    responsive: [
                        {
                            breakpoint: 1440,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                            }
                          }
                    ]
                    //     autoplay: true,
                    //     autoplaySpeed: 3000,
                    //     speed: 1000,
                });
                $('.slick-prev').hide();
                $('.cards').find('.slick-prev').css('display', 'none');
})
document.addEventListener('click', documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest('.icon-menu')){
        document.documentElement.classList.toggle('menu-open');
    }
}




