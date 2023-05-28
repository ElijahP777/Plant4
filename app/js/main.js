// $(function () {
    
//     $('.cards').slick({
//         slidesToShow: 3,
//         slidesToScroll: 2,
//                     dots: false,
//                     arrows: true,
//                     responsive: [
//                         {
//                             breakpoint: 1440,
//                             settings: {
//                                 slidesToShow: 2,
//                                 slidesToScroll: 1
//                             }
//                         },
//                         {
//                             breakpoint: 768,
//                             settings: {
//                               slidesToShow: 1,
//                               slidesToScroll: 1
//                             }
//                           }
//                     ]
//                     //     autoplay: true,
//                     //     autoplaySpeed: 3000,
//                     //     speed: 1000,
//                 });
//                 $('.slick-prev').hide();
//                 $('.cards').find('.slick-prev').css('display', 'none');



// })
// // menu
// document.addEventListener('click', documentClick);

// function documentClick(e) {
    //     const targetItem = e.target;
    
    //     if (targetItem.closest('.icon-menu')){
        //         document.documentElement.classList.toggle('menu-open');
        //     }
// };  
$(function () {
    // Инициализация слайдера
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
});

// Скрытие стрелки "Назад" по умолчанию
$('.slick-prev').hide();

// Обработчик клика на иконку меню
// document.addEventListener('click', documentClick);

// function documentClick(e) {
//       const targetItem = e.target;
  
//       if (targetItem.closest('.icon-menu')) {
//         document.documentElement.classList.toggle('menu-open');
//       }
//     }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', documentClick);
  
    function documentClick(e) {
      const targetItem = e.target;
  
      if (targetItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open');
      }
  
      if (window.innerWidth <= 767.98) {
        const menuLink = targetItem.closest('.menu__list-link');
        if (menuLink) {
          e.preventDefault();
          const sectionId = menuLink.getAttribute('href');
          document.documentElement.classList.remove('menu-open');
          setTimeout(function() {
            scrollToSection(sectionId);
          }, 300); // Задержка 300 миллисекунд (0.3 секунды)
        }
      }
    }
  
    function scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
  