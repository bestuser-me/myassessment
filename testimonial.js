var swiper = new Swiper(".mySwiper",
{
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    slidesPerView:1,
    spaceBetween:5,
    pagination:{
        el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints:{
        640:{
            slidesPerView:2,
            spaceBetween:20,
        },
        768:{
            slidesPerView:3,
            spaceBetween:40,
        },
        1024:{
            slidesPerView:3,
            spaceBetween:50,
        }
    }
})
