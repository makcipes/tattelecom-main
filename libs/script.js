var mainSlider = '';

$(document).ready(function() {

    /*MAIN MENU*/

    $("#menu-sandwich, #header-mobile .left").click(function() {
        $("#main-menu").show().addClass("visible");
        $('#main-wrapper').height($('#main-menu').height());
    	$('#main-wrapper').css('overflow', 'hidden');
    });

    $("#menu-close-button").click(function() {
        $("#main-menu").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(e) {
            $(this).hide();
            $(this).off();
        });

        $("#main-menu").removeClass("visible");
        $('#main-wrapper').css('height', 'auto');
    	$('#main-wrapper').css('overflow', 'initial');
    });

    /*SUBMENUS*/

    // $(".main-page-menu .right a").not('.phone').mouseenter(function() {
    // 	$(".main-page-menu-submenu").hide();
    // 	$("#"+$(this).attr("id")+"-submenu").show();
    // })
    $("img.logo").click(function() {
        window.location.href = "./index.html";
    });

    if ($('.bxslider').length > 0) {

        mainSlider = $('.bxslider').bxSlider({
            onSlideAfter: function($slideElement, oldIndex, newIndex) {
                // do mind-blowing JS stuff here
                $('.current-slide-number').html(mainSlider.getCurrentSlide() + 1);
            }
        });

        var mainSliderCount = mainSlider.getSlideCount();
        $(".overall-slides-number").html(mainSliderCount);

        $('#main-slider-next').click(function() {
            mainSlider.goToNextSlide();
            return false;
        });

        $('#main-slider-prev').click(function() {
            mainSlider.goToPrevSlide();
            return false;
        });

        mobileSlider = $('#main-slider-mobile ul').bxSlider({
            onSlideAfter: function($slideElement, oldIndex, newIndex) {
                // do mind-blowing JS stuff here
                $('.mobile-current-slide-number').html(mobileSlider.getCurrentSlide() + 1);
            }
        });

        var mobileSliderCount = mobileSlider.getSlideCount();
        $(".mobile-overall-slides-number").html(mainSliderCount);

        $('#mobile-main-slider-next').click(function() {
            mobileSlider.goToNextSlide();
            return false;
        });

        $('#mobile-main-slider-prev').click(function() {
            mobileSlider.goToPrevSlide();
            return false;
        });

    }


    /*SERVICES FOR HOME SLIDER*/
    if ($('.services-for-home-slider ul').length > 0) {

        var servicesForHomeSlider = $('.services-for-home-slider ul').bxSlider({
            onSlideAfter: function($slideElement, oldIndex, newIndex) {
                // do mind-blowing JS stuff here
                $('.services-for-home-current-slide-number').html(servicesForHomeSlider.getCurrentSlide() + 1);
            }
        });
        var servicesForHomeSliderCount = servicesForHomeSlider.getSlideCount();
        $(".services-for-home-overall-slides-number").html(servicesForHomeSliderCount);

        $('#services-for-home-slider-prev').click(function() {
            servicesForHomeSlider.goToNextSlide();
            return false;
        });

        $('#services-for-home-slider-next').click(function() {
            servicesForHomeSlider.goToPrevSlide();
            return false;
        });
    }

    /*SPECIAL OFFERS SLIDER*/
    if ($('.special-offers-block ul').length > 0) {
        $('.special-offers-block ul').bxSlider({
            infiniteLoop:false,
            
            onSlideAfter: function($slideElement, oldIndex, newIndex) {
             
                $(this).closest('.special-offers-block').find('.special-offers-current-slide-number').html(this.getCurrentSlide()+1);
            },

            onSliderLoad: function(currentIndex) {
                //console.log(this);
                $(this).closest('.special-offers-block').find('.special-offers-overall-slides-number').html(this.getSlideCount());
                var currentSlider=this;
                $(this).closest('.special-offers-block').find('.special-offers-slider-next').click(function() {
                    currentSlider.goToNextSlide();
                    return false;
                });
                $(this).closest('.special-offers-block').find('.special-offers-slider-prev').click(function() {
                    currentSlider.goToPrevSlide();
                    return false;
                });                

            }
        });
    }

    /*PLANS AND PACKETS SLIDER*/

    $('#plans-and-packets ul').bxSlider({
            onSlideAfter: function($slideElement, oldIndex, newIndex) {
             
                $(this).closest('#plans-and-packets').find('.plans-current-slide-number').html(this.getCurrentSlide()+1);
            },

            onSliderLoad: function(currentIndex) {
                //console.log(this);
                $(this).closest('#plans-and-packets').find('.plans-overall-slides-number').html(this.getSlideCount());
                var currentSlider=this;
                $(this).closest('#plans-and-packets').find('#plans-slider-next').click(function() {
                    currentSlider.goToNextSlide();
                    return false;
                });
                $(this).closest('#plans-and-packets').find('#plans-slider-prev').click(function() {
                    currentSlider.goToPrevSlide();
                    return false;
                });                

            }
        });

    /*SELECTS*/
    $('#district-selector, #town-selector, form select').select2({
        minimumResultsForSearch: Infinity
    }).on("select2:open", function() {
        $('.select2-results__options').niceScroll({
            cursorcolor: "#666666",
            autohidemode: false,
            background: "rgba(0,0,0,0.2)",
            cursorwidth: "4px",
            cursorborder: "0",
            cursorborderradius: "1px",
            railoffset: 10
        });
    });

    $('.city-chooser').click(function(e) {
        e.preventDefault();
        $('#city-select-menu').show();
    });

    $('#city-select-menu .header .right').click(function() {
        $('#city-select-menu').hide();
        $('#main-wrapper').css('height', 'auto');
    	$('#main-wrapper').css('overflow', 'initial');
    });

    $('#city-chooser-icon-mobile').click(function() {
    	$('#city-select-menu').show();
    	$('#main-wrapper').height($('#header-mobile').height()+$('#top-menu-mobile').height()+$('#city-select-menu').height());
    	$('#main-wrapper').css('overflow', 'hidden');
    });

    


    $('#menu-sandwich-mobile').click(function() {
    	$('#top-menu-mobile-content').show();
    	$('#top-menu-mobile-content .content').accordion();
    	$('#main-wrapper').height($('#header-mobile').height()+$('#top-menu-mobile').height()+$('#top-menu-mobile-content').height());
    	$('#main-wrapper').css('overflow', 'hidden');
    });

    $('#top-menu-mobile-close').click(function() {
    	$('#top-menu-mobile-content').hide();
    	$('#main-wrapper').css('height', 'auto');
    	$('#main-wrapper').css('overflow', 'initial');
    });



    /*LOAD MORE NEWS*/

    $("#load-more-news").click(function(e) {
        e.preventDefault();
        $.ajax({
            url: 'PATH',
        })
        .done(function() {
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            /*БЛОК ЗАГРУЗКИ НОВОСТЕЙ */

            $(".news-container").append('<div class=\"news-item\">\r\n\t\t\t\t\t<div class=\"date\">\r\n\t\t\t\t\t\t<div class=\"day\">26<\/div>\r\n\t\t\t\t\t\t<div class=\"month\">\u043C\u0430\u044F<\/div>\r\n\t\t\t\t\t<\/div>\r\n\r\n\t\t\t\t\t<div class=\"image\">\r\n\t\t\t\t\t\t<img src=\".\/img\/news-image.jpg\">\r\n\t\t\t\t\t<\/div>\r\n\r\n\t\t\t\t\t<div class=\"date-mobile\">\r\n\t\t\t\t\t\t26.05.2017\r\n\t\t\t\t\t<\/div>\r\n\r\n\t\t\t\t\t<div class=\"details\">\r\n\t\t\t\t\t\t<h4>\u0422\u0430\u0442\u0442\u0435\u043B\u0435\u043A\u043E\u043C \u043F\u0440\u0438\u043D\u044F\u043B \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u041A\u0430\u0437\u0430\u043D\u0441\u043A\u043E\u043C \u043C\u0430\u0440\u0430\u0444\u043E\u043D\u0435 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u043B \u0443\u0441\u043B\u0443\u0433\u0438 \u043E\u043D\u043B\u0430\u0439\u043D \u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u0438<\/h4>\r\n\t\t\t\t\t\t<p>25 \u043C\u0430\u044F \u0432 \u0433. \u0410\u043B\u044C\u043C\u0435\u0442\u044C\u0435\u0432\u0441\u043A\u0435 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 \u0443\u043B. \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E, 47 \u043E\u0442\u043A\u0440\u044B\u043B\u0441\u044F \u043D\u043E\u0432\u044B\u0439 \u043E\u0444\u0438\u0441 \u043F\u0440\u043E\u0434\u0430\u0436 \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0422\u0430\u0442\u0442\u0435\u043B\u0435\u043A\u043E\u043C \u0438 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 \u041B\u0435\u0442\u0430\u0439.<\/p>\r\n\t\t\t\t\t\t<a href=\"#\">\u0427\u0418\u0422\u0410\u0422\u042C \u0414\u0410\u041B\u0415\u0415<\/a>\r\n\t\t\t\t\t<\/div>\r\n\r\n\t\t\t\t<\/div><div class=\"news-item\">\r\n\t\t\t\t\t<div class=\"date\">\r\n\t\t\t\t\t\t<div class=\"day\">26<\/div>\r\n\t\t\t\t\t\t<div class=\"month\">\u043C\u0430\u044F<\/div>\r\n\t\t\t\t\t<\/div>\r\n\r\n\t\t\t\t\t<div class=\"image\">\r\n\t\t\t\t\t\t<img src=\".\/img\/news-image.jpg\">\r\n\t\t\t\t\t<\/div>\r\n\r\n\t\t\t\t\t<div class=\"date-mobile\">\r\n\t\t\t\t\t\t26.05.2017\r\n\t\t\t\t\t<\/div>\r\n\r\n\t\t\t\t\t<div class=\"details\">\r\n\t\t\t\t\t\t<h4>\u0422\u0430\u0442\u0442\u0435\u043B\u0435\u043A\u043E\u043C \u043F\u0440\u0438\u043D\u044F\u043B \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u041A\u0430\u0437\u0430\u043D\u0441\u043A\u043E\u043C \u043C\u0430\u0440\u0430\u0444\u043E\u043D\u0435 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u043B \u0443\u0441\u043B\u0443\u0433\u0438 \u043E\u043D\u043B\u0430\u0439\u043D \u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u0438<\/h4>\r\n\t\t\t\t\t\t<p>25 \u043C\u0430\u044F \u0432 \u0433. \u0410\u043B\u044C\u043C\u0435\u0442\u044C\u0435\u0432\u0441\u043A\u0435 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 \u0443\u043B. \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E, 47 \u043E\u0442\u043A\u0440\u044B\u043B\u0441\u044F \u043D\u043E\u0432\u044B\u0439 \u043E\u0444\u0438\u0441 \u043F\u0440\u043E\u0434\u0430\u0436 \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0422\u0430\u0442\u0442\u0435\u043B\u0435\u043A\u043E\u043C \u0438 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 \u041B\u0435\u0442\u0430\u0439.<\/p>\r\n\t\t\t\t\t\t<a href=\"#\">\u0427\u0418\u0422\u0410\u0422\u042C \u0414\u0410\u041B\u0415\u0415<\/a>\r\n\t\t\t\t\t<\/div>\r\n\r\n\t\t\t\t<\/div><div class=\"news-item\">\r\n\t\t\t\t\t<div class=\"date\">\r\n\t\t\t\t\t\t<div class=\"day\">26<\/div>\r\n\t\t\t\t\t\t<div class=\"month\">\u043C\u0430\u044F<\/div>\r\n\t\t\t\t\t<\/div>\r\n\r\n\t\t\t\t\t<div class=\"image\">\r\n\t\t\t\t\t\t<img src=\".\/img\/news-image.jpg\">\r\n\t\t\t\t\t<\/div>\r\n\r\n\t\t\t\t\t<div class=\"date-mobile\">\r\n\t\t\t\t\t\t26.05.2017\r\n\t\t\t\t\t<\/div>\r\n\r\n\t\t\t\t\t<div class=\"details\">\r\n\t\t\t\t\t\t<h4>\u0422\u0430\u0442\u0442\u0435\u043B\u0435\u043A\u043E\u043C \u043F\u0440\u0438\u043D\u044F\u043B \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u041A\u0430\u0437\u0430\u043D\u0441\u043A\u043E\u043C \u043C\u0430\u0440\u0430\u0444\u043E\u043D\u0435 \u0438 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u043B \u0443\u0441\u043B\u0443\u0433\u0438 \u043E\u043D\u043B\u0430\u0439\u043D \u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u0438<\/h4>\r\n\t\t\t\t\t\t<p>25 \u043C\u0430\u044F \u0432 \u0433. \u0410\u043B\u044C\u043C\u0435\u0442\u044C\u0435\u0432\u0441\u043A\u0435 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 \u0443\u043B. \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E, 47 \u043E\u0442\u043A\u0440\u044B\u043B\u0441\u044F \u043D\u043E\u0432\u044B\u0439 \u043E\u0444\u0438\u0441 \u043F\u0440\u043E\u0434\u0430\u0436 \u0438 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u0422\u0430\u0442\u0442\u0435\u043B\u0435\u043A\u043E\u043C \u0438 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 \u041B\u0435\u0442\u0430\u0439.<\/p>\r\n\t\t\t\t\t\t<a href=\"#\">\u0427\u0418\u0422\u0410\u0422\u042C \u0414\u0410\u041B\u0415\u0415<\/a>\r\n\t\t\t\t\t<\/div>\r\n\r\n\t\t\t\t<\/div>');
        });
        
    });



    $('.district-content').hide();
    $('.district').click(function() {
        $('.district').removeClass('active');
        $(this).addClass('active');
        $('.district-content').slideUp('fast');
        $('#'+$(this).attr('id')+'-content').slideDown('fast', function() {
            
        });
    });

    $('.fourg-coverage-mobile .content').accordion();

    $('.offices select').select2({
        minimumResultsForSearch: Infinity
    }).on("select2:open", function() {
        $('.select2-results__options').niceScroll({
            cursorcolor: "#666666",
            autohidemode: false,
            background: "rgba(0,0,0,0.2)",
            cursorwidth: "4px",
            cursorborder: "0",
            cursorborderradius: "1px",
            railoffset: 10,
            dropdownCssClass: "no-borders-dropdown"
        });
    });


    $('.vertical-dropdown').select2({
        minimumResultsForSearch: Infinity
    }).on("select2:open", function() {
        $('.select2-results__options').niceScroll({
            cursorcolor: "#666666",
            autohidemode: false,
            background: "rgba(0,0,0,0.2)",
            cursorwidth: "4px",
            cursorborder: "0",
            cursorborderradius: "1px",
            railoffset: 10,
            dropdownCssClass: "no-borders-dropdown"
        });
    });
    $('.sample-dropdown-select').select2({
        minimumResultsForSearch: Infinity
    }).on("select2:open", function() {
        $('.select2-results__options').niceScroll({
            cursorcolor: "#666666",
            autohidemode: false,
            background: "rgba(0,0,0,0.2)",
            cursorwidth: "4px",
            cursorborder: "0",
            cursorborderradius: "1px",
            railoffset: 10,
            dropdownCssClass: "no-borders-dropdown"
        });
    });        
});


$(document).ready(function() {
    $('.dropdwn .top').click(function () {
        $(this).parent().find('table').toggle();
        $(this).find('img').toggleClass('flip');
    });
});
$(document).ready(function() {
    $('.dropdwn .toggle').click(function () {
        $(this).parent().find('p').toggle();
        $(this).find('img').toggleClass('flip');
    });
});
$(document).ready(function() {
    $('.tarif-ttk .main-inner .row .row_item h2').click(function () {
        $(this).parent().find('.tar-info').toggle();
    });
    $('.tarif-ttk .top .title .price').click(function () {
        $('.top .title').find('.tar-info').toggle();
    });

    });
$(document).ready(function() {
    $('#base .main-inner .left table tr td img').click(function () {
        $(this).parent().find('.tar-info').toggle();
    });
});

$(document).ready(function() {
    $('#open-map').click(function () {
        $('#map-popup').toggle();
    });
    $('#map-popup .close').click(function () {
        $('#map-popup').toggle();
    });
});
