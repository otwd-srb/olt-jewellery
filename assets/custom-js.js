$(document).ready(function() {

  /*--------------- Scroll to top js -------------------*/
   (function($) { "use strict";

                $(document).ready(function(){"use strict";

                                             var progressPath = document.querySelector('.progress-wrap path');
                                             var pathLength = progressPath.getTotalLength();
                                             progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
                                             progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
                                             progressPath.style.strokeDashoffset = pathLength;
                                             progressPath.getBoundingClientRect();
                                             progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
                                             var updateProgress = function () {
                                               var scroll = $(window).scrollTop();
                                               var height = $(document).height() - $(window).height();
                                               var progress = pathLength - (scroll * pathLength / height);
                                               progressPath.style.strokeDashoffset = progress;
                                             }
                                             updateProgress();
                                             $(window).scroll(updateProgress);	
                                             var offset = 50;
                                             var duration = 550;
                                             jQuery(window).on('scroll', function() {
                                               if (jQuery(this).scrollTop() > offset) {
                                                 jQuery('.progress-wrap').addClass('active-progress');
                                               } else {
                                                 jQuery('.progress-wrap').removeClass('active-progress');
                                               }
                                             });				
                                             jQuery('.progress-wrap').on('click', function(event) {
                                               event.preventDefault();
                                               jQuery('html, body').animate({scrollTop: 0}, duration);
                                               return false;
                                             })
                                            });

               })(jQuery); 
  /*-------------------- END ------------------*/

  jQuery('.nav-toggle').click(function(event) {
    jQuery(this).toggleClass('active');
    event.stopPropagation();
    jQuery(' #tt-megamenu .tt-mega_menu').slideToggle("2000");
    jQuery('body').toggleClass("open-header");
  });
  jQuery("#tt-megamenu .tt-mega_menu").on("click", function(event) {
    event.stopPropagation();
    jQuery(this).removeClass('active');
  });	

  /*--------------------------- menu hover ---------------------------*/

  jQuery("#tt-megamenu .tt-mega_menu").hover(
    function () {
      jQuery('body').addClass("menu_hover");
    },
    function () {
      jQuery('body').removeClass("menu_hover");
    }
  );
  /*-------------------- Filter toggle ------------------*/

  jQuery(".filter-toggle").on("click" , function(e){
    e.preventDefault();
    jQuery(this).toggleClass("active");
    jQuery(".filter-toggle-wrap").slideToggle("is-visible");
  })
  var filter = jQuery(this).find('.full_width .sorting_wrapper');
  jQuery(this).find('.filter-toggle').insertBefore(filter);

  /*-------------------- END ------------------*/

  jQuery('.product-single__thumbs img').on('click', function () {
    var src = jQuery(this).attr('src');

    if (src != '') {
      jQuery(this).closest('.product-wrapper').find('img.grid-view-item__image').first().attr('src', src);
    }
    jQuery(this).parent('.grid-item').addClass('open').siblings('.grid-item').removeClass('open');
  });

  /*-------------------- video -------------------*/

  var p = jQuery(".popup_overlay");

  jQuery("#popup_toggle").click(function() {
    jQuery("body").addClass("popup-toggle");
    p.css("display", "block");

  });
  p.click(function(event) {
    e = event || window.event;
    if (e.target == this) {
      jQuery(p).css("display", "none");
      jQuery('body').removeClass('popup-toggle'); 
    }
  });
  jQuery(".popup_close,.homeslider ul.slick-slider .slick-arrow").click(function() {
    p.css("display", "none");
    jQuery('body').removeClass('popup-toggle'); 
  });

  //video popup
  function toggleVideo(state) {
    // if state == 'hide', hide. Else: show video
    var div = document.getElementById("popupVid");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    //div.style.display = state == 'hide' ? 'none' : '';
    func = state == "hide" ? "pauseVideo" : "playVideo";
    iframe.postMessage(
      '{"event":"command","func":"' + func + '","args":""}',
      "*"
    );
  }

  jQuery("#popup_toggle, .homeslider ul.slick-slider .slick-arrow").click(function() {
    p.css("visibility", "visible").css("opacity", "1");
  });

  p.click(function(event) {
    e = event || window.event;
    if (e.target == this) {
      jQuery(p)
      .css("visibility", "hidden")
      .css("opacity", "0");
      toggleVideo("hide");
    }
  });

  jQuery(".popup_close").click(function() {
    p.css("visibility", "hidden").css("opacity", "0");
    toggleVideo("hide");
  });

  /*------------------------- Checkout button --------------------*/

  jQuery(".shopify-payment-button .shopify-payment-button__button").prepend( jQuery("<i class='mdi mdi-cart-outline'></i>"));

  /*----------------------------------------------*/

  if(jQuery('.header_1 .wrapper-wrap').hasClass('logo_center'))  {
    jQuery('body').addClass('logo_center');
  }
  var w_width = $(window).width();
  $('.slider-content-main-wrap').css('width',w_width);
  if($('.site-header').hasClass('header_transaparent')){
    $('body.template-index').addClass('header_transaparent')
  }

  var img_id = jQuery('.product-single__thumbs .slick-active.slick-current').find('.product-single__thumb').data('id');
  if(jQuery('.product-lightbox-btn').hasClass(img_id)){
    jQuery('.product-lightbox-btn.'+img_id).show();
  }

  /*----------------------- filter ----------------------*/

  jQuery(".filter-left").on("click" , function(e){
    e.preventDefault();
    jQuery(this).toggleClass("active");
    jQuery(".off-canvas.position-left").addClass("is-open");
    jQuery(".js-off-canvas-overlay.is-overlay-fixed").addClass("is-visible is-closable");
  });
  jQuery(".filter-right").on("click" , function(e){
    e.preventDefault();
    jQuery(this).toggleClass("active");
    jQuery(".off-canvas.position-right").addClass("is-open");
    jQuery(".js-off-canvas-overlay.is-overlay-fixed").addClass("is-visible is-closable");
  });
  jQuery(".off-canvas .sidebar_close").on("click" , function(e){
    e.preventDefault();
    jQuery(".off-canvas.position-left").removeClass("is-open");
    jQuery(".off-canvas.position-right").removeClass("is-open");
    jQuery(".js-off-canvas-overlay.is-overlay-fixed").removeClass("is-visible is-closable");
  });
  jQuery(".is-overlay-fixed").on("click" , function(e){
    e.preventDefault();
    jQuery(".filter-left").trigger('click');
    jQuery(".filter-right").trigger('click');
    jQuery(".off-canvas.position-left").removeClass("is-open");
    jQuery(".off-canvas.position-right").removeClass("is-open");
    jQuery(".js-off-canvas-overlay.is-overlay-fixed").removeClass("is-visible is-closable");
  });
  $('.product-360-button a').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    disableOn: false,
    preloader: false,
    fixedContentPos: false,
    callbacks: {
      open: function() {
        $(window).resize()
      }
    }
  });

  countDownIni('.flip-countdown,.js-flip-countdown'); 

  /*--------------- popup Video ---------------------*/

  $('.popup-video').magnificPopup({
    disableOn: 300,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  if ($('a.product-lightbox-btn').length > 0 || $('a.product-video-popup').length > 0) {
    $('.product-single__photos .gallery,.design_2 .product-img').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      tLoading: '<div class="please-wait dark"><span></span><span></span><span></span></div>',
      removalDelay: 300,
      closeOnContentClick: true,
      gallery: {
        enabled: true,
        navigateByImgClick: false,
        preload: [0, 1]
      },
      image: {
        verticalFit: false,
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      },
      callbacks: {
        beforeOpen: function() {
          var productVideo = $('.product-video-popup').attr('href');
          if (productVideo) {
            this.st.mainClass = 'has-product-video';
            var galeryPopup = $.magnificPopup.instance;
            galeryPopup.items.push({
              src: productVideo,
              type: 'iframe'
            });
            galeryPopup.updateItemHTML();
          }
        },
        open: function() {}
      }
      // other options
    });
  }
  $('.design_3 .pro_img').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    tLoading: '<div class="please-wait dark"><span></span><span></span><span></span></div>',
    removalDelay: 300,
    closeOnContentClick: true,
    gallery: {
      enabled: true,
      navigateByImgClick: false,
      preload: [0, 1]
    },
    image: {
      verticalFit: false,
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    },
    callbacks: {
      beforeOpen: function() {
        var productVideo = $('.product-video-popup').attr('href');
        if (productVideo) {
          this.st.mainClass = 'has-product-video';
          var galeryPopup = $.magnificPopup.instance;
          galeryPopup.items.push({
            src: productVideo,
            type: 'iframe'
          });
          galeryPopup.updateItemHTML();
        }
      },
      open: function() {}
    }
    // other options
  });
  $('body').on('click', '.product-lightbox-btn', function(e) {
    $('.product-wrapper-owlslider').find('.owl-item.active a').click();
    e.preventDefault();
  });

  /*-------------- Quantity Start -------------------*/ 

  $('.qtyplus').on('click',function(e){
    e.preventDefault();     
    var  input_val = jQuery(this).parents('.qty-box-set').find('.quantity');
    var currentVal = parseInt( jQuery(this).parents('.qty-box-set').find('.quantity').val());
    var update = jQuery('.cart-update .quantity').data("item-id");
    console.log(update);
    if (!isNaN(currentVal)) {
      jQuery(this).parents('.qty-box-set').find('.quantity').val(currentVal + 1);
    } else {
      jQuery(this).parents('.qty-box-set').find('.quantity').val(1);
    }

  });

  $(".qtyminus").on('click',function(e) {
    e.preventDefault();
    var  input_val = jQuery(this).parents('.qty-box-set').find('.quantity');
    var currentVal = parseInt( jQuery(this).parents('.qty-box-set').find('.quantity').val());
    if (!isNaN(currentVal) && currentVal > 1) {
      jQuery(this).parents('.qty-box-set').find('.quantity').val(currentVal - 1);
    } else {
      jQuery(this).parents('.qty-box-set').find('.quantity').val(1);
    }

  });

  /*---------------- END ------------------*/
  $("#navToggle").on('click',function(e) {
    jQuery(this).next('.Site-navigation').slideToggle(500);
  });
  $(".menu_toggle_wrap #navToggle").on('click',function(e) {
    jQuery(this).parent().next('.Site-navigation').slideToggle(500);
  });

  jQuery("body.footer_style_1 .footer_toggle").on("click" , function(e){
    jQuery('#shopify-section-footer-model-1').addClass('toggle-footer'); 
    jQuery("body").addClass("footer1-open");
    e.preventDefault();
  });

  jQuery("body.footer_style_1 .footer_close_toggle").on("click" , function(e){ 
    jQuery('#shopify-section-footer-model-1').removeClass('toggle-footer');
    jQuery("body").removeClass("footer1-open");
    e.preventDefault();
  });

  
    $(".header_1 .fullscreen_header_toggle,.header_3 .fullscreen_header_toggle").on("click" , function(e){   
      e.preventDefault();
      $(this).toggleClass("active");
      $(".tt-megamenu1").slideToggle();
      $("body").toggleClass("fullnav-open");   
    });
  $(".header_2 .fullscreen_header_toggle").on("click" , function(e){   
      e.preventDefault();
      $(this).toggleClass("active");
      $(".tt-megamenu1").slideToggle();
      $("body").toggleClass("fullnav-open");   
    });
    $(".header_1 .tt-mega_menu1 .menu-close,.header_3 .tt-mega_menu1 .menu-close").on("click" , function(e){      
      $(".tt-megamenu1").slideUp();
      $("body").removeClass("fullnav-open"); 
    });
  $(".demo-heading").on("click" , function(e){   
      e.preventDefault();
      $("#shopify-section-demo-list").toggleClass("active");
    });
    $(".demos-close-icon").on("click" , function(e){ 
      $("#shopify-section-demo-list").removeClass("active"); 
    });
  /*-------------- Search js ----------------*/


  jQuery(".site-header__search.search-full .serach_icon").on('click',function(e){
    e.preventDefault();
    jQuery(this).toggleClass('active'); 
    jQuery('body').toggleClass('search_full_active'); 
    jQuery( ".search-full-screen" ).slideToggle( "slow" );
    jQuery(".search-bar input.input-group-field").focus();
    jQuery('.full-search-wrapper').addClass('search-overlap');
    jQuery('.myaccount  .dropdown-toggle').removeClass("open");
    jQuery( '.myaccount  .customer_account' ).slideUp( "fast" );  
    jQuery('.site-header .site-header_cart_link').removeClass("active");
    jQuery( "#Sticky-slidedown-cart" ).slideUp( "fast" );   
    jQuery( "#slidedown-cart" ).slideUp( "fast" );
    jQuery('body').toggleClass('search_toggle'); 
    jQuery('body').removeClass('account-toggle');
    jQuery('body').removeClass('cart_toggle');
  });
  jQuery(".site-header__search.search-full .close-search").on('click',function(){
    jQuery('.site-header__search.search-full .serach_icon').removeClass('active');
    jQuery('.full-search-wrapper').removeClass('search-overlap');  
    jQuery('.full-search-wrapper').removeClass('search-overlap');  
    jQuery('.header_3 .search-full-screen').removeClass('active');
    jQuery('body').removeClass('search_full_active');
    jQuery('body').removeClass('search_toggle'); 
    jQuery( ".search-full-screen" ).slideUp( "slow" );
  });

  /*------------------------ END -------------------*/
  /*-------------------- Myaccount -----------------*/

  jQuery(".myaccount  span.dropdown-toggle").on('click',function(event){   
    event.preventDefault();

    jQuery( ".header_1 .customer_account,.header_2 .customer_account,.header_3 .customer_account" ).slideToggle( "fast" );
    jQuery('.myaccount').toggleClass('open');
    jQuery('body').toggleClass('account-toggle');
    if(jQuery( window ).width() < 992) {   
      jQuery( ".header_1 .search_wrapper,.header_2 .search_wrapper" ).slideUp( "fast" );
    }
    jQuery( ".header_3 .search_wrapper" ).slideUp( "fast" );
    jQuery('.site-header__search:not(.search-full) .serach_icon').removeClass('active');
    jQuery('body').removeClass('search_full_active'); 
    jQuery('body').removeClass('currency-open');
    jQuery( ".currencies.flag-dropdown-menu" ).slideUp( "fast" );
    jQuery('body').removeClass('language-open');
    jQuery(".header_language .disclosure__toggle").removeClass('active');
    jQuery(".header_currency .currency_wrapper.dropdown-toggle").removeClass('active');
    jQuery( ".header_language .disclosure-list" ).slideUp( "fast" ); 
    jQuery('.site-header .site-header_cart_link').removeClass("active");    
    jQuery( "#slidedown-cart" ).slideUp( "fast" );
    jQuery( "#Sticky-slidedown-cart" ).slideUp( "fast" );
    jQuery('body').removeClass('search_toggle'); 
    jQuery('body').removeClass('cart_toggle');
  });


  jQuery(".header_language .disclosure__toggle").on("click", function (event) {     
    event.preventDefault();
    jQuery(".customer_account").stop();    
    jQuery('body').toggleClass('language-open');
    jQuery('body').removeClass('currency-open');
    jQuery('body').removeClass('account-toggle');
    jQuery('body').removeClass('cart_active');
    jQuery('.myaccount').removeClass('open');
    jQuery('.currency_wrapper').removeClass('active');
    jQuery( ".disclosure-list" ).slideToggle( "fast" );
    jQuery(this).toggleClass('active');  
    jQuery( ".customer_account" ).slideUp( "fast" );
    jQuery( ".currencies.flag-dropdown-menu" ).slideUp( "fast" );
    jQuery( "#slidedown-cart" ).slideUp( "fast" );
    jQuery( "#Sticky-slidedown-cart" ).slideUp( "fast" );
  });

  $(".header_currency .currency_wrapper.dropdown-toggle").on("click", function (event) {     
    event.preventDefault();
    jQuery(".customer_account").stop(); 
    jQuery('body').toggleClass('currency-open');
    jQuery('body').removeClass('language-open');
    jQuery('body').removeClass('account-toggle');
    jQuery('body').removeClass('cart_active');
    jQuery('.myaccount').removeClass('open');
    jQuery('.disclosure__toggle').removeClass('active');
    jQuery( ".currencies.flag-dropdown-menu" ).slideToggle( "fast" );
    $(this).toggleClass('active'); 
    jQuery( ".customer_account" ).slideUp( "fast" );
    jQuery( ".header_language .disclosure-list" ).slideUp( "fast" ); 
    jQuery( "#slidedown-cart" ).slideUp( "fast" );
    jQuery( "#Sticky-slidedown-cart" ).slideUp( "fast" );
  });
  /*-------------------- END -----------------*/
 var featured = $(".feature-collection .product-grid");
  featured.owlCarousel({
    items : 4 , //10 items above 1000px browser width
    dots: false,
    loop: false,
    nav: true,
    rewind:false,
    autoplay:false,
    responsive: {
      100: {
        items: 1
      },
      315: {
        items: 2
      },
      600: {
        items: 3
      },
      992: {
        items: 4
      },
      1300: {
        items: 4
      },
    }
  });
  
  var p_col = jQuery('.slider-specialproduct').data('col');
  if(jQuery("body").hasClass('disable_menutoggle')){
    $('body.disable_menutoggle .slider-specialproduct').owlCarousel({
      items : p_col, //10 items above 1000px browser width
      nav : true,
      dots : false,
      rewind:true,
      responsive: {
        100: {
          items: 1
        },
        319: {
          items: 2
        },
        700: {
          items: 3
        },
        1200: {
          items: p_col
        }
      }
    });
  }else{
    $('body .slider-specialproduct').owlCarousel({
      items : p_col, //10 items above 1000px browser width
      nav : true,
      dots : false,
      rewind:true,
      responsive: {
        100: {
          items: 1
        },
        319: {
          items: 2
        },
        700: {
          items: 3
        },
        1200: {
          items: p_col
        }
      }
    });
  }  

  $('.slider-specialproduct-wrap').each(function () { 
    if($(this).find('.owl-nav').hasClass('disabled')){
      $(this).find('.customNavigation').hide();
    }else{
      $(this).find('.customNavigation').show();
    }
  });
  $(".slider-specialproduct-wrap .customNavigation .next").click(function(){
    var wrap = $(this).closest('.slider-specialproduct-wrap');
    $(wrap).find('.slider-specialproduct').trigger('next.owl');
  });
  $(".slider-specialproduct-wrap .customNavigation .prev").click(function(){
    var wrap = $(this).closest('.slider-specialproduct-wrap');
    $(wrap).find('.slider-specialproduct').trigger('prev.owl');
  });

  var brandsowl = $("body:not(.rtl) #brands_list_slider");
  var  brandsowlrtl = $("body.rtl #brands_list_slider");
  brandsowl.owlCarousel({
    items : 5 , //10 items above 1000px browser width
    dots: false,
    rewind:false,
    autoplay:true,
    autoplayHoverPause:true,
    nav: true,
    loop: false,
    responsive: {
      100: {
        items: 2
      },
      320: {
        items: 2
      },
      544: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });
  brandsowlrtl.owlCarousel({
    items : 5 , //10 items above 1000px browser width
    dots: false,
    rewind:true,
    nav: true,
    autoplay:true,
    autoplayHoverPause:true,
    loop: true,
    rtl: true,
    responsive: {
      100: {
        items: 2
      },
      320: {
        items: 2
      },
      544: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  });
  $(".brands_next").click(function(){
    brandsowl.trigger('owl.next');
  });
  $(".brands_prev").click(function(){
    brandsowl.trigger('owl.prev');
  });
  $(".brands_next").click(function(){
    brandsowlrtl.trigger('owl.next');
  });
  $(".brands_prev").click(function(){
    brandsowlrtl.trigger('owl.prev');
  });

  /*-------------------------gallery------------------*/
  var gallery = $("#cmsgallery .image-content");
  gallery.owlCarousel({
    items : 6 , //10 items above 1000px browser width
    dots: false,
    loop: false,
    nav: true,
    rewind:false,
    autoplay:false,
    responsive: {
      100: {
        items: 1
      },
      315: {
        items: 2
      },
      600: {
        items: 3
      },
      992: {
        items: 4
      },
      1300: {
        items: 6
      },
    }
  });
  $('body:not(.rtl) .ttcms-banner .ttbanner-wrap').owlCarousel({
    items :2, //1 items above 1000px browser width
    nav : false,
    dots : false,
    loop: false,
    autoplay:true,
    rtl:false,
    responsive: {
      992: {
        items: 2
      },
      600: {
        items: 2
      },
      100: {
        items:1
      }
    }
  });
  $('body.rtl .ttcms-banner .ttbanner-wrap').owlCarousel({
    items :2, //1 items above 1000px browser width
    nav : false,
    dots : false,
    loop: false,
    autoplay:true,
    rtl:true,
    responsive: {
      992: {
        items: 2
      },
      600: {
        items: 2
      },
      100: {
        items:1
      }
    }
  });

  var offer = $("body:not(.rtl) .ttcmsoffer-block .ttcmsoffer-content");
  offer.owlCarousel({
    items : 1 , //10 items above 1000px browser width
    dots: false,
    loop: true,
    nav: true,
    rewind:true,
    autoplay:true,
    autoplayHoverPause: true,
    responsive: {
      100: {
        items: 1
      },
      1300: {
        items: 1
      }
    }
  });    

  var offer = $("body.rtl .ttcmsoffer-block .ttcmsoffer-content");
  offer.owlCarousel({
    items : 1 , //10 items above 1000px browser width
    dots: false,
    loop: true,
    nav: true,
    rtl:true,
    rewind:true,
    autoplay:true,
    autoplayHoverPause: true,
    responsive: {
      100: {
        items: 1
      },
      1300: {
        items: 1
      }
    }
  });

  var banner = $(".product-thumb .slider-nav");
  banner.owlCarousel({
    items : 1 , //10 items above 1000px browser width
    dots: false,
    loop: true,
    nav: true,
    rewind:true,
    autoplay:true,
    autoplayHoverPause: true,
    responsive: {
      100: {
        items: 1
      },
      481: {
        items: 1
      },
      992: {
        items: 1
      },
      1200: {
        items: 1
      },
      1300: {
        items: 1
      }
    }
  });     

  $('body #ttcmsservices .block_content').owlCarousel({
    items :4, //1 items above 1000px browser width
    nav : false,
    dots : true,
    loop: false,
    autoplay:false,
    rewindNav:true,
    responsive: {
      1200: {
        items: 4
      },
      700: {
        items: 3
      },
      481: {
        items: 2
      },
      100: {
        items: 1
      }
    }
  });

  $('body .about-services .block_content').owlCarousel({
    items :3, //1 items above 1000px browser width
    nav : false,
    dots : true,
    loop: false,
    autoplay:false,
    rewindNav:true,
    responsive: {
      1200: {
        items: 3
      },
      768: {
        items: 3
      },
      481: {
        items: 2
      },
      100: {
        items: 1
      }
    }
  });
  $('body:not(.rtl) #tt-megamenu .list_product_menu_content').owlCarousel({
    items : 3, //1 items above 1000px browser width
    nav : false,
    autoPlay:true,
    autoplaySpeed:1000,
    stopOnHover: false,
    loop: false,
    dots : true,
    responsive: {
      768: {
        items: 3
      },
      360: {
        items: 2
      },
      100: {
        items: 1
      }
    }
  });
  $('body.rtl #tt-megamenu .list_product_menu_content').owlCarousel({
    items : 3, //1 items above 1000px browser width
    nav : true,
    autoPlay:true,
    autoplaySpeed:1000,
    rtl: true,
    stopOnHover: false,
    loop: false,
    dots : true,
    responsive: {
      768: {
        items: 3
      },
      360: {
        items: 2
      },
      100: {
        items: 1
      }
    }
  });

  $(".full_gallery_slider.owl-carousel").on("changed.owl.carousel",function(e){
    var element = e.target; // DOM element, in this example .owl-carousel
    var items = e.item.count; // Number of items
    var item = e.relatedTarget.relative(e.item.index) + 1; 

    $(element).parent().find('.num').html(item + "/" + items)
  }),

  $('body:not(.rtl) .full_gallery_slider.owl-carousel').owlCarousel({
    loop:true,
    startPosition:0,
    center: true,
    dots:true,
    items:1,
    lazyLoad: true,
    nav:false,
    responsive:{
      100:{
        items:1
      },
      767:{
        items:1
      },
      991:{
        items:3
      },
      1199:{
        items:3
      },
      1299:{
        items:3
      }
    }
  });
  $('body.rtl .full_gallery_slider.owl-carousel').owlCarousel({
    loop:true,
    startPosition:0,
    center: true,
    dots:true,
    items:3,
    rtl:true,
    lazyLoad: true,
    nav:false,
    responsive:{
      100:{
        items:1
      },
      767:{
        items:1
      },
      991:{
        items:3
      },
      1199:{
        items:3
      },
      1299:{
        items:3
      }
    }
  });

  $('body:not(.rtl) .tttestimonial-wrap .testimonials_wrap').owlCarousel({
    items: 1, //1 items above 1000px browser width
    nav: true,
    navText: [
      "<i class='mdi-chevron-left mdi'></i>",
      "<i class='mdi-chevron-right mdi'></i>"
    ],
    dots: false,
    loop: false,
    autoplay: false,
    autoplayHoverPause: true,
    responsive: {
      1279: {
        items: 1
      },
      1250: {
        items: 1
      },
      600: {
        items: 1
      }
    }
  });
  $('body.rtl .tttestimonial-wrap .testimonials_wrap').owlCarousel({
    items: 1, //1 items above 1000px browser width
    nav: true,
    navText: [
      "<i class='mdi-chevron-left mdi'></i>",
      "<i class='mdi-chevron-right mdi'></i>"
    ],
    dots: false,
    loop: false,
    autoplay: false,
    autoplayHoverPause: true,
    responsive: {
      1279: {
        items: 1
      },
      1250: {
        items: 1
      },
      600: {
        items: 1
      }
    }
  });

  $('body:not(.rtl) .category_feature').owlCarousel({             
    items: 5,
    nav : true,
    dots : false,
    autoplay:false,
    loop:true,
    rewind:true,
    rtl:false,
    autoplayHoverPause: false,
    responsive: {
      100: {
        items: 1
      },
      544: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      },
      1600: {
        items: 5
      }
    }
  });
  $('body.rtl .category_feature').owlCarousel({
    items: 5,
    nav : true,
    dots : false,
    autoplay:false,
    loop:true,
    rewind:true,
    rtl:false,
    autoplayHoverPause: false,
    responsive: {
      100: {
        items: 1
      },
      544: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      },
      1600: {
        items: 5
      }
    }
  });
  $(".category-feature .owl-item").hover(function(){
    $(".category-feature .owl-item.center").addClass("changeStyle");
  });

  $( ".category-feature .owl-item" ).mouseleave(function() {
    $( ".category-feature .owl-item.center" ).removeClass("changeStyle");
  });
  $('body:not(.rtl) .category_feature1').owlCarousel({             
    items:4,
    nav : true,
    dots : false,
    autoplay:false,
    loop:true,
    rewind:true,
    rtl:false,
    autoplayHoverPause: false,
    responsive: {
      100: {
        items: 1
      },
      481: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
  $('body.rtl .category_feature1').owlCarousel({
    items: 4,
    nav : true,
    dots : false,
    autoplay:false,
    loop:true,
    rewind:true,
    rtl:false,
    autoplayHoverPause: false,
    responsive: {
      100: {
        items: 1
      },
      481: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
  $(".category-feature1 .owl-item").hover(function(){
    $(".category-feature1 .owl-item.center").addClass("changeStyle");
  });

  $( ".category-feature1 .owl-item" ).mouseleave(function() {
    $( ".category-feature1 .owl-item.center" ).removeClass("changeStyle");
  });
$('body:not(.rtl) .collection-category').owlCarousel({             
    items: 5,
    nav : false,
    dots : false,
    autoplay:true,
    loop:true,
    rtl:false,
    autoplayHoverPause: false,
    lazyLoad: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    responsive: {
      100: {
        items: 1
      },
      320: {
        items: 2
      },
      481: {
        items: 3
      },
      768: {
        items: 4
      },
      1300: {
        items: 4
      }
    }
  });
  $('body.rtl .collection-category').owlCarousel({
    items: 5,
    nav : false,
    dots : false,
    autoplay:true,
    loop:true,
    rtl:false,
    autoplayHoverPause: false,
    lazyLoad: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    responsive: {
      100: {
        items: 1
      },
      320: {
        items: 2
      },
      481: {
        items: 3
      },
      768: {
        items: 4
      },
      1300: {
        items: 4
      }
    }
  });
  $('body:not(.rtl) .widget_top_rated_products .top-products').owlCarousel({
    items : 1, //1 items above 1000px browser width
    nav : true,
    dots : true,
    loop: false,
    autoplay:true,
    rtl:false,
    responsive: {
      1279: {
        items: 1
      },
      600: {
        items: 1
      }
    }
  });
  $('body.rtl .widget_top_rated_products .top-products').owlCarousel({
    items : 1, //1 items above 1000px browser width
    nav : true,
    dots : true,
    loop: false,
    autoplay:true,				
    rtl:true,
    responsive: {
      1279: {
        items: 1
      },
      600: {
        items: 1
      }
    }
  });


  jQuery(".spr-summary-actions-newreview").on('click',function(e) {
    e.preventDefault();
    jQuery(".spr-content").slideToggle( "slow" );
  });

  $(".pro_btn.quick-view-wrap > a,.pro_btn.add_tocart form > a,.pro_btn.add-to-compare .add-in-compare-js").click(function(){$(this).addClass("loading");setTimeout(function(){$(".pro_btn.quick-view-wrap > a,.pro_btn.add_tocart form > a, .pro_btn.add-to-compare .add-in-compare-js").removeClass("loading")},2000)});

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header-sticky").style.top = "0";
    } else {
        document.getElementById("header-sticky").style.top = "-160px";
    }
    prevScrollpos = currentScrollPos;
}
  
});

function moremenu() {     
  var max_elem = 4;
  var items = $("#accessibleNav > li");
  var surplus = items.slice(max_elem, items.length);
  surplus.wrapAll('<li class="more_menu site-nav--has-dropdown menu-item-depth-0"><ul class="top-link sub-nav__dropdown sub-menu mobile-nav__sublist">');
  jQuery('.more_menu').prepend('<a href="#" class="level-top topmega-menu-link">More</a>');
  jQuery('.more_menu').mouseover(function(){
    jQuery(this).children('ul').addClass('shown-link');
    jQuery('body').addClass('menu-open');
  })
  jQuery('.more_menu').mouseout(function(){
    jQuery(this).children('ul').removeClass('shown-link');
    jQuery('body').removeClass('menu-open');      
  });
  $("#accessibleNav").css('display', 'block');
}
jQuery(document).ready(function(){
  moremenu();
});

jQuery(window).scroll(function () {
  if(jQuery(document).height() > jQuery(window).height()){
    var scroll = jQuery(window).scrollTop();
    if (scroll > 100) {
      jQuery("#GotoTop").fadeIn();
    } else {
      jQuery("#GotoTop").fadeOut();
    }
  }
});

jQuery(function(){
  var liCount = jQuery('.header_style_6 #tt-megamenu .tt_menus_ul >li').length / 2;
  var liCount = Math.floor(liCount);
  jQuery(".header_style_6 #tt-megamenu .tt_menus_ul >li:lt("+liCount+")").addClass('left-link');
  jQuery(".header_style_6 #tt-megamenu .tt_menus_ul >li:not('.left-link')").addClass('right-link');
  jQuery('.header_style_6 #tt-megamenu .tt_menus_ul >li.left-link').wrapAll('<div class="menu-left"></div>');
  jQuery('.header_style_6 #tt-megamenu .tt_menus_ul >li.right-link').wrapAll('<div class="menu-right"></div>');
});

/*--------- Start js for userinfo -------------*/

function footercolumn() { 
  if ($(document).width() <= 991) {
    jQuery("#shopify-section-footer-model-3 .footer-bottom .footer-column").insertAfter("#shopify-section-footer-model-3 .footer-column.contactus");
  } 
  else if ($(document).width() >= 992) {
    jQuery("#shopify-section-footer-model-3 .footer-column.links").insertBefore("#shopify-section-footer-model-3 .footer-bottom .copyright");
  }
}
jQuery(document).ready(function() {
  footercolumn();
});
jQuery(window).resize(function() {
  footercolumn();
});
/*------------------ END -----------------------*/
function responsiveMenu(){
  if(jQuery(window).width() < 992) {

    jQuery("#shopify-section-TT-megamenu").appendTo( ".menu_toggle_wrap" );
    jQuery('.sub-nav__dropdown').css('display','none');   
    jQuery(".header_style_6 .main-header .header_logo_wrap").insertAfter(".header_style_6 .main-header .right-icon");  
    jQuery(".header_1 .menu_toggle_wrap").insertBefore( ".header_1 .header_logo_wrap" );  
    jQuery(".header_1 .top_header_1_link").appendTo( ".header_1 .tt-mega_menu" ); 
    jQuery(".header_1 .header-service").insertAfter( ".header_1 .top_header_1_link" );
    jQuery(".header_2 .top_header_2_link").appendTo( ".header_2 .tt-mega_menu" ); 
    jQuery(".header_2 .header-service").insertAfter( ".header_2 .top_header_2_link" );
    jQuery(".header_3 .tt_menus_ul1 .tt_menu_item.item").appendTo(".header_3 .tt-megamenu .tt-mega_menu .tt_menus_ul");
    jQuery(".header_3 .header-middle .left-nav").insertAfter(".header_3 .tt-megamenu .tt-mega_menu .tt_menus_ul");
    jQuery(".header_1 .tt_menus_ul1 .tt_menu_item.item").appendTo(".header_1 .tt-megamenu .tt-mega_menu .tt_menus_ul");
    jQuery(".header_1 .header-middle .left-nav").insertAfter(".header_1 .tt-megamenu .tt-mega_menu .tt_menus_ul");
    jQuery(".header_2 .tt_menus_ul1 .tt_menu_item.item").appendTo(".header_2 .tt-megamenu .tt-mega_menu .tt_menus_ul");
    jQuery(".header_2 .header-middle .left-nav").insertAfter(".header_2 .tt-megamenu .tt-mega_menu .tt_menus_ul");
     jQuery(".header_style_3 .header_logo_wrap").insertBefore(".header_style_3 .right-icon");
     jQuery(".header_style_5 .compare-icon-div,.header_style_1 .compare-icon-div,.header_style_2 .compare-icon-div,.header_style_3 .compare-icon-div").appendTo(".header_style_5 .customer_account>ul,.header_style_1 .customer_account>ul,.header_style_2 .customer_account>ul,.header_style_3 .customer_account>ul");
     jQuery(".header_style_1 .right-nav .header_language,.header_style_2 .right-nav .header_language,.header_style_3 .right-nav .header_language,.header_style_4 .right-nav .header_language,.header_style_5 .right-nav .header_language,.header_style_6 .right-nav .header_language,.header_style_7 .right-nav .header_language,.header_style_8 .right-nav .header_language").appendTo(".right-nav .myaccount .customer_account");
     jQuery(".header_style_1 .right-nav .header_currency,.header_style_2 .right-nav .header_currency,.header_style_3 .right-nav .header_currency,.header_style_4 .right-nav .header_currency,.header_style_5 .right-nav .header_currency,.header_style_6 .right-nav .header_currency,.header_style_7 .right-nav .header_currency,.header_style_8 .right-nav .header_currency").insertAfter(".right-nav .header_language");
     jQuery(".header_style_1 .right-nav,.header_style_2 .right-nav,.header_style_3 .right-nav,.header_style_4 .right-nav,.header_style_8 .right-nav,.header_style_7 .right-nav,.header_style_6 .right-nav,.header_style_5 .right-nav").insertBefore(".header_style_1 .site-header__cart,.header_style_2 .site-header__cart,.header_style_6 .site-header__cart,.header_style_4 .site-header__cart,.header_style_8 .site-header__cart,.header_style_7 .site-header__cart,.header_style_5 .site-header__cart,.header_style_3 .site-header__cart");
    jQuery(".header_style_8 .left-nav").insertAfter(".header_style_8 .tt_menus_ul");
  }
  else { 
    jQuery("body.header_style_1 #shopify-section-TT-megamenu").insertBefore("body.header_style_1 .main-header .header_logo_wrap");
    jQuery("body.header_style_2 #shopify-section-TT-megamenu").insertBefore("body.header_style_2 .menu-top .offer-heading");
    jQuery("body.header_style_3 #shopify-section-TT-megamenu").insertBefore("body.header_style_3 .main-header .right-icon");
    jQuery("body.header_style_4 #shopify-section-TT-megamenu").insertBefore("body.header_style_4 .main-header .right-icon");
    jQuery("body.header_style_5 #shopify-section-TT-megamenu").insertBefore("body.header_style_5 .main-header .right-icon");
    jQuery("body.header_style_6 #shopify-section-TT-megamenu").insertBefore("body.header_style_6 .main-header .right-icon");
    jQuery(".header_style_7 #shopify-section-TT-megamenu").appendTo(".header_style_7 .header-bottom .container");
    jQuery(".header_style_8 #shopify-section-TT-megamenu").insertAfter(".header_style_8 .header-bottom .tt-megamenu1");
    jQuery(".header_1 .menu_toggle_wrap").appendTo( ".header_1 .menu_wrapper");
    jQuery(".header_1 .top_header_1_link").prependTo( ".header_1 .top_header_1" );
    jQuery(".header_1 .header-service").insertAfter( ".header_1 .top-header" );
    jQuery(".header_2 .top_header_2_link").prependTo( ".header_2 .top_header_2" );
    jQuery(".header_2 .header-service").insertAfter( ".header_2 .top-header" );
    jQuery(".header_3 .tt_menus_ul .tt_menu_item.item").prependTo(".header_3 .tt-megamenu1 .tt-mega_menu1 .tt_menus_ul1");
    jQuery(".header_3 .left-nav").prependTo(".header_3 .header-middle .container");
    jQuery(".header_1 .tt_menus_ul .tt_menu_item.item").prependTo(".header_1 .tt-megamenu1 .tt-mega_menu1 .tt_menus_ul1");
    jQuery(".header_1 .left-nav").prependTo(".header_1 .header-middle .middle-content");
    jQuery(".header_2 .tt_menus_ul .tt_menu_item.item").prependTo(".header_2 .tt-megamenu1 .tt-mega_menu1 .tt_menus_ul1");
    jQuery(".header_2 .left-nav").prependTo(".header_2 .header-middle .middle-content");
    jQuery(".header_style_4 .right-nav,.header_style_8 .right-nav").insertBefore(".header_style_4 .site-header__search,.header_style_8 .site-header__search");
     jQuery(".header_style_7 .right-nav").insertBefore(".header_style_7 .header_logo_wrap");
     jQuery(".header_style_6 .right-nav").insertBefore(".header_style_6 #shopify-section-TT-megamenu");    
     jQuery(".header_style_5 .right-nav,.header_style_1 .right-nav").prependTo(".header_style_5 .middle-content,.header_style_1 .middle-content");  
     jQuery(".header_style_2 .right-nav").appendTo(".header_style_2 .middle-content");
     jQuery(".header_style_3 .right-nav").appendTo(".header_style_3 .header-middle .container");
     jQuery(".header_style_3 .header_logo_wrap").insertAfter(".header_style_3 .header-middle");
    jQuery(".header_style_5 .compare-icon-div,.header_style_1 .compare-icon-div,.header_style_2 .compare-icon-div,.header_style_3 .compare-icon-div").insertAfter(".header_style_5 .myaccount,.header_style_1 .myaccount,.header_style_2 .myaccount,.header_style_3 .myaccount");
    jQuery(".header_style_1 .header_language,.header_style_2 .header_language,.header_style_3 .header_language,.header_style_4 .header_language,.header_style_5 .header_language,.header_style_6 .header_language,.header_style_7 .header_language,.header_style_8 .header_language").appendTo(".right-nav");
    jQuery(".header_style_1 .header_currency,.header_style_2 .header_currency,.header_style_3 .header_currency,.header_style_4 .header_currency,.header_style_5 .header_currency,.header_style_6 .header_currency,.header_style_7 .header_currency,.header_style_8 .header_currency").insertAfter(".header_language");
    jQuery(".header_style_6 .header_logo_wrap").insertAfter(".header_style_6 #tt-megamenu .tt_menus_ul .menu-left");
    jQuery(".header_style_8 .left-nav").insertAfter(".header_style_8 #shopify-section-TT-megamenu");
  }
}

jQuery(document).ready(function() {
  responsiveMenu();

  jQuery(".product-write-review").on('click',function(e) {
    e.preventDefault();
    $('a[href=\'#tab-2\']').trigger('click');
    jQuery('html, body').animate({
      scrollTop: jQuery(".product_tab_wrapper").offset().top-150
    }, 1000);
  });
});

jQuery(window).resize(function() {
  responsiveMenu();
  var w_width = $(window).width();
  $('.slider-content-main-wrap').css('width',w_width);
});

function height(){
  var maxHeight = $(".design_3 .product-block .product-img .image,.design_2 .product-block .image,.design_1 .product-single__thumbs a.product-single__thumbnail img").height();
  $(".design_3 .product-block .product-img .extra-video,.design_2 .product-block .extra-video,.design_1 .product-single__thumbs a.product-single__thumbnail.extra-video img").height(maxHeight);
  $(".design_3 .product-block .product-img .video,.design_2 .product-block .video,.design_1 .product-single__thumbs a.product-single__thumbnail.video img").height(maxHeight);
  $(".design_3 .product-block .product-img .model,.design_2 .product-block .model,.design_1 .product-single__thumbs a.product-single__thumbnail.model img").height(maxHeight);
}
$(document).ready(function(){height();});
$(window).resize(function(){height();});
$(window).scroll(function() {height();});

function footerToggle() {
  if(jQuery( window ).width() < 992) {   
    jQuery('.left-sidebar.sidebar').insertAfter('.collection_wrapper');
    jQuery('.sidebar .collection_sidebar .sidebar-block').insertAfter('.filter-wrapper');
    jQuery('#shopify-section-footer-model-1 .footer-column.links').appendTo('#shopify-section-footer-model-1 .footer-content');
    jQuery('#shopify-section-footer-model-2 .footer-column.links').insertAfter('#shopify-section-footer-model-2 .footer-logo-content');
    jQuery(".right-sidebar.sidebar .widget > h4,.left-sidebar.sidebar .widget > h4,.blog-section .sidebar .widget > h4").addClass( "toggle" );
    jQuery(".right-sidebar.sidebar .widget,.left-sidebar.sidebar .widget,.blog-section .sidebar .widget").children(':nth-child(2)').css( 'display', 'none' );
    jQuery(".right-sidebar.sidebar .widget.active,.left-sidebar.sidebar .widget.active,.blog-section .sidebar .widget.active").children(':nth-child(2)').css( 'display', 'block' );
    jQuery(".right-sidebar.sidebar .widget > h4.toggle,.left-sidebar.sidebar .widget > h4.toggle,.blog-section .sidebar .widget > h4.toggle").unbind("click");
    jQuery(".right-sidebar.sidebar .widget > h4.toggle,.left-sidebar.sidebar .widget > h4.toggle,.blog-section .sidebar .widget > h4.toggle").on('click',function() {
      jQuery(this).parent().toggleClass('active').children(':nth-child(2)').slideToggle( "fast" );
    });   
    jQuery(".collection_right .sidebar-block .widget > h4,.collection_left .sidebar-block .widget > h4,.filter-toggle-wrap .sidebar-block .widget > h4").addClass( "toggle" );
    jQuery(".collection_right .sidebar-block .widget,.collection_left .sidebar-block .widget,.filter-toggle-wrap .sidebar-block .widget ").children(':nth-child(2)').css( 'display', 'none' );
    jQuery(".collection_right .sidebar-block .widget.active,.collection_left .sidebar-block .widget.active,.filter-toggle-wrap .sidebar-block .widget.active").children(':nth-child(2)').css( 'display', 'block' );
    jQuery(".collection_right .sidebar-block .widget > h4.toggle,.collection_left .sidebar-block .widget > h4.toggle,.filter-toggle-wrap .sidebar-block .widget > h4.toggle").unbind("click");
    jQuery(".collection_right .sidebar-block .widget > h4.toggle,.collection_left .sidebar-block .widget > h4.toggle,.filter-toggle-wrap .sidebar-block .widget > h4.toggle").on('click',function() {
      jQuery(this).parent().toggleClass('active').children(':nth-child(2)').slideToggle( "fast" );
    });  
  }else {
    jQuery('.sidebar-block').prependTo('.collection_sidebar');
    jQuery('.left-sidebar.sidebar').insertBefore('.collection_wrapper');
    jQuery('#shopify-section-footer-model-1 .footer-column.links').insertBefore('#shopify-section-footer-model-1 .copyright');
  	jQuery('#shopify-section-footer-model-2 .footer-column.links').insertBefore('#shopify-section-footer-model-2 .copyright');
    jQuery(".sidebar .widget > h4,.sidebar-block .widget > h4").unbind("click");
    jQuery(".sidebar .widget > h4,.sidebar-block .widget > h4").removeClass( "toggle" );
    jQuery(".sidebar .widget,.sidebar-block .widget").children(':nth-child(2)').css( 'display', 'block' );
  }
}
jQuery(document).ready(function() {
  footerToggle();
});
jQuery(window).resize(function() {
  footerToggle();
});

function splitStr(string,seperator){
  return string.split(seperator);
}

function countDownIni(countdown) {
  $(countdown).each(function () {
    var countdown = $(this);
    var promoperiod;
    if (countdown.attr('data-promoperiod')) {
      promoperiod = new Date().getTime() + parseInt(countdown.attr('data-promoperiod'), 10);
    } else if (countdown.attr('data-countdown')) {
      promoperiod = countdown.attr('data-countdown');
    }
    if (Date.parse(promoperiod) - Date.parse(new Date()) > 0) {
      $(this).addClass('countdown-block');
      countdown.countdown(promoperiod, function (event) {
        // countdown.html(event.strftime('%-w weeks %-d days %Hh %Mm %Ss'));
        countdown.html(event.strftime('<span><span class="left-txt">Left</span><span>%D</span><span class="time-txt">Days</span></span>' + '<span><span>%H</span><span class="time-txt">Hrs</span></span>' + '<span><span>%M</span><span class="time-txt">Min</span></span>' + '<span><span class="second">%S</span><span class="time-txt">Sec</span></span>'));
      });
    }

  });
}

function hb_animated_contents() {
  $(".hb-animate-element:in-viewport").each(function (i) {
    var $this = $(this);
    if (!$this.hasClass('hb-in-viewport')) {
      setTimeout(function () {
        $this.addClass('hb-in-viewport');
      }, 180 * i);
    }
  });
}

$(window).scroll(function () {
  hb_animated_contents();
});
$(window).load(function () {
  hb_animated_contents();
});

function sidebarsticky() { 
  if ($(document).width() <= 1199) {
    jQuery('.left-sidebar.sidebar,.right-sidebar.sidebar.collection_right,.collection_left').theiaStickySidebar({
      additionalMarginBottom: 30,
      additionalMarginTop: 30
    });
  } 
  else if ($(document).width() >= 1200) {
    jQuery('.left-sidebar.sidebar,.right-sidebar.sidebar,.collection_right,.collection_left').theiaStickySidebar({
      additionalMarginBottom: 30,
      additionalMarginTop: 130
    });
  }
}
jQuery(document).ready(function() {
  sidebarsticky();
});
jQuery(window).resize(function() {
  sidebarsticky();
});
/* responsive accordian menu*/
jQuery(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    $('ul.tt_menus_ul1 > li.tt_mm_hassub').addClass('active');
    // Variables privadas
    var links = this.el.find('li.tt_mm_hassub .mobile-nav__sublist-trigger');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }
  Accordion.prototype.dropdown = function(e) {
    e.preventDefault();
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('li.tt_mm_hassub .tt_sub_menu_wrap').not($next).slideUp().parent().removeClass('open');
    };
  }	
  var accordion = new Accordion($('.tt_menus_ul1'), false);
});
$(function() {
  if(!$('body').hasClass('fullnav-open'))  {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    // Variables privadas
    var links = this.el.find('li.tt_mm_hassub .mobile-nav__sublist-trigger');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('li.tt_mm_hassub .tt_sub_menu_wrap').not($next).slideUp().parent().removeClass('open');
    };
  }	

  var accordion = new Accordion($('.tt_menus_ul'), false);
  }
});
$(function() {
  var Accordions = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var link = this.el.find('.toggle');
    // Evento
    link.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordions.prototype.dropdown = function(e) {
    var $el = e.data.el;
    $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('active');

    if (!e.data.multiple) {
      $el.find('.inline-list').not($next).slideUp().parent().removeClass('active');
    };
  }	

  var accordions = new Accordions($('.footer-column'), false);

});