import { AfterViewInit, Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
  styleUrls: ['./mobile-header.component.css']
})
export class MobileHeaderComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    // Menu
    $("nav#dropdown").meanmenu();


    // Sliders
    $(".product-slider").slick({
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev">p<br />r<br />e<br />v</button>',
      nextArrow: '<button type="button" class="slick-next">n<br />e<br />x<br />t</button>',
      responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } }
      ]
    });

    $(".discount-product-slider").slick({
      autoplay: false,
      arrows: false,
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    $(".brand-slider").slick({
      autoplay: false,
      arrows: false,
      dots: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        { breakpoint: 1169, settings: { slidesToShow: 4 } },
        { breakpoint: 969, settings: { slidesToShow: 3 } },
        { breakpoint: 767, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1 } }
      ]
    });

    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: ".slider-nav"
    });

    $(".slider-nav").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: false,
      arrows: true,
      centerMode: false,
      focusOnSelect: true,
      responsive: [{ breakpoint: 480, settings: { slidesToShow: 2 } }],
      prevArrow: '<div class="single-pro-arrow arrow-left"><i class="zmdi zmdi-chevron-left"></i></div>',
      nextArrow: '<div class="single-pro-arrow arrow-right"><i class="zmdi zmdi-chevron-right"></i></div>'
    });

    $(document).delegate('*[data-bs-toggle="lightbox"]', 'click',  (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      $(this).ekkoLightbox();
    });

    $(".menu-toggle").on("click",  () => {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".main-menu").animate({ left: "-225px" }, 500);
      } else {
        $(this).addClass("active");
        $(".main-menu").animate({ left: "0" }, 500);
      }
    });

    $(".search-open").on("click", function () {
      $(".sidebar-search").removeClass("slideOutUp").addClass("slideInDown");
    });

    $(".close-search").on("click", function () {
      $(".sidebar-search").removeClass("slideInDown").addClass("slideOutUp");
    });

    $(".menu-scroll").niceScroll({
      cursorborder: "1px",
      cursorcolor: "#c87065",
      boxzoom: true
    });

    $(".boxscrol2").niceScroll({
      cursorborder: "0px",
      cursorcolor: "#c87065",
      boxzoom: true
    });

    let stickyMenu = $("#sticky-menu");
    let pos = stickyMenu.position();

    if (stickyMenu.length) {
      $(window).on("scroll", function () {
        if ($(window).scrollTop() > pos.top) {
          stickyMenu.addClass("sticky");
        } else {
          stickyMenu.removeClass("sticky");
        }
      });
    }

    $("[data-countdown]").each( () => {
      let $this = $(this), finalDate = $(this).data("countdown");
      $this.countdown(finalDate, function (event: any) {
        $this.html(event.strftime(
          '<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span>' +
          '<span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span>' +
          '<span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span>'
        ));
      });
    });

    $("#cat-treeview ul").treeview({
      animated: "normal",
      persist: "location",
      collapsed: true,
      unique: true
    });

    $("#slider-range").slider({
      range: true,
      min: 50,
      max: 2000,
      values: [0, 999],
      slide: function (event: any, ui: any) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });

    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));

    $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
    $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');

    $(".qtybutton").on("click",  () => {
      let button = $(this),
        oldValue = button.parent().find("input").val();
      let newVal = button.text() === "+" ? parseFloat(oldValue) + 1 : Math.max(1, parseFloat(oldValue) - 1);
      button.parent().find("input").val(newVal);
    });

    $(".payment-accordion").find(".payment-accordion-toggle").on("click",  () => {
      $(this).next().slideToggle(500);
      $(".payment-content").not($(this).next()).slideUp(500);
    });

    $(".payment-accordion-toggle").on("click",  (e: any) => {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      e.preventDefault();
    });

    $.scrollUp({
      scrollText: '<i class="zmdi zmdi-triangle-up"></i>',
      easingType: "linear",
      scrollSpeed: 900,
      animation: "fade"
    });

    $(".dropdown .option-btn").on("click",  () => {
      let menu = $(this).siblings(".dropdown-menu");
      if (menu.hasClass("active")) {
        menu.removeClass("active").slideUp();
        $(this).removeClass("active");
      } else {
        $(".dropdown .dropdown-menu").removeClass("active").slideUp();
        $(".dropdown .option-btn").removeClass("active");
        $(this).addClass("active");
        menu.addClass("active").slideDown();
      }
    });

    // Form submit
    const form = $("#contact-form");
    const message = $(".form-message");

    form.submit(function (e: any) {
      e.preventDefault();
      let formData = form.serialize();

      $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: formData
      }).done(function (response: any) {
        message.removeClass("error").addClass("success").text(response);
        $("#contact-form input, #contact-form textarea").val("");
      }).fail(function (error: any) {
        message.removeClass("success").addClass("error");
        message.text(error.responseText || "Oops! An error occured and your message could not be sent.");
      });
    });
  }
}
