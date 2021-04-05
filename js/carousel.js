/*
================================================
Custom jQuery scripts
================================================
*/

jQuery(document).ready(function($) {
  'use strict';
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    center: true,
    dots:false,
    autoplay:true,
    smartSpeed: 1000,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        400:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:5,
            nav:true,
            loop:true,
            navText : ['','']
        }
      }
    })
    $('.owl-carousel-news').owlCarousel({
    loop:true,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        400:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true,
            navText : ['','']
        }
      }
    })
    $('.owl-carousel-projects').owlCarousel({
    loop:true,
    margin:10,
    center: true,
    dots:false,
    autoplay:true,
    smartSpeed: 1000,
    nav: true,
    navText: ["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"],
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:2
        },
        400:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:5,
            loop:true,
            navText : ['','']
        }
      }
    })
  });
});
