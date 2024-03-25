const swiper = new Swiper('.hero__swiper', {
    // Optional parameters
    loop: true,
    autoplay: {
        delay: 5000,
      },
    // If we need pagination
    pagination: {
      el: '.hero__swiper-pagination',
      clickable: true
    },
  });

