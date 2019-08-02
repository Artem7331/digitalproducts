$(document).ready(function(){
  $('.ba-slider').slick({
  	dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  });

  $('.slider-two').slick({
      arrows: true,
      prevArrow: $('.prev-arrow'),
  nextArrow: $('.next-arrow'),
      slidesToShow: 3,
      adaptiveHeight: true,
      autoplay: true,
      swipeToSlide: true,
      infinite: true,
      speed: 500,
      autoplaySpeed: 6000,
      responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -7.9357193 , lng: 112.631773},
          zoom: 15,
          disableDefaultUI: true,
          featureType: "poi",
        elementType: "labels",
        });

        var image = 'img/marker.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: -7.930100, lng: 112.637773},
          map: map,
          icon: image
        })
      }


  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '150');
});

$(".header__nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

// const team = new Vue({
//     el: '#dev-team__slider',
//     data: {
//         team: [
//             {
//                 id: 1,
//                 avatar: '../img/Miguel.png',
//                 name: 'MIGUEL OBRIEN',
//                 position: 'CEO & Founder',
//                 social: {
//                     in: 'https://www.linkedin.com',
//                     gg: 'https://aboutme.google.com',
//                     fb: 'https://www.facebook.com',
//                     tw: 'https://twitter.com'
//                 }
//             },
//             {
//                 id: 2,
//                 avatar: '../img/Jackie.png',
//                 name: 'JACKIE CARROLL',
//                 position: 'Art Director',
//                 social: {
//                     be: 'https://www.behance.net',
//                     in: 'https://www.linkedin.com',
//                     gg: 'https://aboutme.google.com',
//                     fb: 'https://www.facebook.com',
//                     tw: 'https://twitter.com'
//                 }
//             },
//             {
//                 id: 3,
//                 avatar: '../img/Ida.png',
//                 name: 'IDA MORRISON',
//                 position: 'Designer',
//                 social: {
//                     be: 'https://www.behance.net',
//                     in: 'https://www.linkedin.com',
//                     gg: 'https://aboutme.google.com',
//                     fb: 'https://www.facebook.com',
//                     tw: 'https://twitter.com'
//                 }
//             },
//             {
//                 id: 4,
//                 avatar: '../img/pikachy.jpg',
//                 name: 'John Mckeon',
//                 position: 'Back-End Developer',
//                 social: {
//                     in: 'https://www.linkedin.com',
//                     gg: 'https://aboutme.google.com',
//                     fb: 'https://www.facebook.com',
//                     tw: 'https://twitter.com'
//                 }
//             },
//             {
//                 id: 5,
//                 avatar: '../img/patric.jpg',
//                 name: 'Patrik Star',
//                 position: 'Front-End Developer',
//                 social: {
//                     gg: 'https://aboutme.google.com',
//                     fb: 'https://www.facebook.com',
//                     tw: 'https://twitter.com'
//                 }
//             }
//           ]
//     }
// });

 
