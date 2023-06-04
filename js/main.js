$(document).ready(function () {

  //***************** CHART JS ****************
  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
      ],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 33, 75, 62, 83, 95, 37, 29, 63, 92, 74, 85, 46, 78],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  //***************** END CHART JS ****************


  //********* SWIPER JS ************

  var testimonialSwiper = new Swiper(".mySwiper-testimonial", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 5,
    spaceBetween: 3,
    freeMode: true,
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 50,
      }
    }
  });

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      640: {
        slidesPerView: 1,
        spaceBetween: 50,
      }
    }

  });

  //********* END SWOPER JS ************

  // MOBILE MEAN MENU JS
  jQuery(".mobile-menu").meanmenu({
    meanScreenWidth: "767",
    meanMenuContainer: ".mobile-menu-container"
  });
  //********* ISOTOPE JS ************
  var $grid = $(".filter-container").isotope({
    // options
  });
  // filter items on button click
  $(".filter-menu").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  // filter items on active click
  $(".filter-menu").on("click", "li", function () {
    $(this).activeClass("active").sibilings.removeClass("active");
  });
  //********* END ISOTOPE JS ************


  //********** SKILL BAR JS *************
  $(".skillbar").skillbar();
  //********** END SKILL BAR JS *************

  



});
