$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",

    },

  });

  // var swiper = new Swiper(".mySwiper", {
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  // });

  var testimonialSwiper = new Swiper(".mySwiper-testimonial", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 5,
    spaceBetween: 3,
    freeMode: true,
  });

  $('.skillbar').skillbar();

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 33, 75, 62, 83, 95, 37, 29, 63, 92, 74, 85, 46, 78,],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });





});