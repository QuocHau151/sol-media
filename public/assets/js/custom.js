////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//$(document).ready(function($) {
$(function () {
  "use strict";

  //  Variables ----------------------------------------------------------------------------------------------------------

  var sceneMaxSize = $(window).width() * 3;
  var selectedTranslateX,
    selectedTranslateY,
    selectedRotation,
    selectedTranslateZ,
    selectedImage,
    nextImage,
    prevImage;
  var animationFinished = true;
  var $dragging = null;
  var firstClickPositionX;
  var firstClickPositionY;
  var pageWrapperLastPositionX;
  var pageWrapperLastPositionY;
  var moveX = 0;
  var moveY = 0;

  var $slide = $(".slide");
  var $body = $("body");
  var $outerWrapper = $(".outer-wrapper");

  //  Pace loading screen ------------------------------------------------------------------------------------------------

  if ($(".loading-overlay").length > 0) {
    Pace.on("done", function () {
      setTimeout(function () {
        $(".loading-overlay").css("display", "none");
      }, 950);
    });
  }

  //  3D Parallax Slider -------------------------------------------------------------------------------------------------

  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });
  $(".slider-pager").empty();
  $(".inner-wrapper .slide").each(function (e) {
    var htmlCode;
    if (e === 0) {
      htmlCode =
        '<div class="item"><a class="active" href="#' +
        $(this).attr("id") +
        '">' +
        (e + 1) +
        '<span style="background-image: url(' +
        $(this).find(".image").attr("data-background") +
        ')"></span></a></div>';
    } else {
      htmlCode =
        '<div class="item"><a href="#' +
        $(this).attr("id") +
        '">' +
        (e + 1) +
        '<span style="background-image: url(' +
        $(this).find(".image").attr("data-background") +
        ')"></span></a></div>';
    }
    $(".slider-pager").append(htmlCode);
  });

  $(".slide:not(.first)").each(function () {
    $(this).attr("data-position-x", randomNumber("position", sceneMaxSize));
    $(this).css("left", $(this).attr("data-position-x") + "px");
    $(this).attr("data-position-y", randomNumber("position", sceneMaxSize));
    $(this).css("top", $(this).attr("data-position-y") + "px");
    $(this).attr("data-position-z", randomNumber("position", 2000));
    $(this).attr("data-rotation", randomNumber("rotation", null));
    $(this).css(
      "transform",
      "rotateZ(" +
        $(this).attr("data-rotation") +
        "deg) translateZ(" +
        $(this).attr("data-position-z") +
        "px)"
    );
  });

  $(".slider-pager a").on("click", function (e) {
    e.preventDefault();
    $(".animate").removeClass("idle");
    play($(this).attr("href"));
  });

  selectedImage = $(".slide.first")[0];
  selectedTranslateX = 0;
  selectedTranslateY = 0;

  $(".next").on("click", function () {
    $(".animate").removeClass("idle");
    if ($(selectedImage).next().length) {
      nextImage = "#" + $(selectedImage).next()[0].id;
      play(nextImage);
    } else {
      nextImage = "#" + $slide.first()[0].id;
      play(nextImage);
    }
  });

  $(".prev").on("click", function (e) {
    $(".animate").removeClass("idle");
    e.preventDefault();
    if ($(selectedImage).prev().length) {
      prevImage = "#" + $(selectedImage).prev()[0].id;
      play(prevImage);
    } else {
      prevImage = "#" + $slide.last()[0].id;
      play(prevImage);
    }
  });

  $slide.on("dragstart", function (event) {
    event.preventDefault();
  });

  function play(_this) {
    animationFinished = false;
    $body.removeClass("zoomed-out");
    $slide.removeClass("active");
    $(".slider-pager a").removeClass("active");
    $(".slider-pager a[href='" + _this + "']").addClass("active");

    $(".slide.first .main-title").css("opacity", 0.5);
    $(".slide .image").each(function (e) {
      var $this = $(this);
      setTimeout(function () {
        $this.css("opacity", 0.5);
      }, e * 40);
    });

    selectedTranslateX = $(_this).attr("data-position-x") * -1;
    selectedTranslateY = $(_this).attr("data-position-y") * -1;
    selectedTranslateZ = $(_this).attr("data-position-z") * -1;
    selectedRotation = $(_this).attr("data-rotation") * -1;
    selectedImage = $(_this);

    $(".inner-wrapper").css({
      transform:
        "translateZ(-" +
        sceneMaxSize / 1.5 +
        "px) translateX(" +
        selectedTranslateX +
        "px) translateY(" +
        selectedTranslateY +
        "px)",
    });

    selectedImage.addClass("active");
    $(".slide:not(.active)").css("pointer-events", "none");
    $(".slide.active").css("pointer-events", "auto");

    setTimeout(function () {
      $(".slide .image").css("opacity", 0);
      selectedImage.find(".image").css("opacity", 1);
      selectedImage.find(".main-title").css("opacity", 1);
      $(".inner-wrapper").css({
        transform:
          "translateZ(" +
          selectedTranslateZ +
          "px) translateX(" +
          selectedTranslateX +
          "px) translateY(" +
          selectedTranslateY +
          "px)",
      });
      $outerWrapper.css({ transform: "rotateZ(" + selectedRotation + "deg)" });
    }, 1000);

    setTimeout(function () {
      $(selectedImage)
        .find(".animate")
        .each(function (e) {
          var $this = $(this);
          setTimeout(function () {
            $this.addClass("idle");
          }, e * 100);
        });
      animationFinished = true;
      $(".slide:not(.active) .image").css("opacity", "0");
      $(".slide:not(.active) .main-title").css("opacity", "0");
      $(".slide:not(.active)").addClass("hide-description");
    }, 1500);
  }

  function randomNumber(method, sceneMaxSize) {
    if (method === "position") {
      return Math.floor(Math.random() * sceneMaxSize) - sceneMaxSize / 2;
    } else if (method === "rotation") {
      return Math.floor(Math.random() * 90) + 10;
    } else {
      return false;
    }
  }

  $slide.on("click", function () {
    var _this = "#" + $(this).attr("id");
    if ($body.hasClass("zoomed-out")) {
      play(_this);
    }
  });

  $(".zoom-out").on("click", function (e) {
    e.preventDefault();
    $(".animate").removeClass("idle");
    $(".inner-wrapper").css(
      "transform",
      "translateZ(-4000px) translateX(" +
        selectedTranslateX +
        "px) translateY(" +
        selectedTranslateY +
        "px)"
    );
    $outerWrapper.css("transform", "rotateZ(0deg)");
    $body.addClass("zoomed-out");
    $(".slide.first .main-title").css("opacity", 0.5);
    $(".slide .image").each(function (e) {
      var $this = $(this);
      setTimeout(function () {
        $this.css("opacity", 0.5);
      }, e * 40);
    });

    pageWrapperLastPositionX = selectedTranslateX;
    pageWrapperLastPositionY = selectedTranslateY;
  });

  $(document.body).on("mousemove", function (e) {
    if ($body.hasClass("zoomed-out")) {
      if ($dragging) {
        $body.addClass("dragging");
        moveX = pageWrapperLastPositionX + (e.pageX - firstClickPositionX);
        moveY = pageWrapperLastPositionY + (e.pageY - firstClickPositionY);
        $(".inner-wrapper").css(
          "transform",
          "translateZ(-4000px) translateX(" +
            moveX +
            "px) translateY(" +
            moveY +
            "px)"
        );
      }
    }
  });

  $(document.body).on("mousedown", ".outer-wrapper", function (e) {
    if ($body.hasClass("zoomed-out")) {
      setTimeout(function () {
        $dragging = $(e.target);
      }, 100);
      firstClickPositionX = e.pageX;
      firstClickPositionY = e.pageY;
      $(".inner-wrapper").css("transition", "0s");
    }
  });

  $(document.body).on("mouseup", function () {
    $body.removeClass("dragging");
    $dragging = null;
    pageWrapperLastPositionX = moveX;
    pageWrapperLastPositionY = moveY;
    $(".inner-wrapper").css("transition", "1s");
  });

  $(document.body).on("touchmove", function (e) {
    if ($body.hasClass("zoomed-out")) {
      if ($dragging) {
        $body.addClass("dragging");
        moveX =
          pageWrapperLastPositionX +
          (e.originalEvent.touches[0].pageX - firstClickPositionX);
        moveY =
          pageWrapperLastPositionY +
          (e.originalEvent.touches[0].pageY - firstClickPositionY);
        $(".inner-wrapper").css(
          "transform",
          "translateZ(-4000px) translateX(" +
            moveX +
            "px) translateY(" +
            moveY +
            "px)"
        );
      }
    }
  });

  $(document.body).on("touchstart", ".outer-wrapper", function (e) {
    if ($body.hasClass("zoomed-out")) {
      setTimeout(function () {
        $dragging = $(e.target);
      }, 100);
      firstClickPositionX = e.originalEvent.touches[0].pageX;
      firstClickPositionY = e.originalEvent.touches[0].pageY;
      $(".inner-wrapper").css("transition", "0s");
    }
  });

  $(document.body).on("touchend", function () {
    $body.removeClass("dragging");
    $dragging = null;
    pageWrapperLastPositionX = moveX;
    pageWrapperLastPositionY = moveY;
    $(".inner-wrapper").css("transition", "1s");
  });

  //  End 3D Parallax Slider ---------------------------------------------------------------------------------------------

  $(".scrollbar-inner").scrollbar();

  if ($body.hasClass("zoomed-out")) {
    $(".inner-wrapper").css(
      "transform",
      "translateZ(-4000px) translateX(0px) translateY(0px)"
    );
    $outerWrapper.css("transform", "rotateZ(0deg)");
    $(".slide .image").css("opacity", 0.5);
  }

  $(".modal").on("show.bs.modal", function (e) {
    $(this)
      .find("iframe")
      .contents()
      .find(".iframe-page .page-wrapper")
      .addClass("scrollbar-inner");
    $(this).find("iframe").contents().find(".scrollbar-inner").scrollbar();
    $(this).find("iframe").attr("src", $(this).find("iframe").attr("data-src"));
  });

  $(".nav-btn").on("click", function (e) {
    e.preventDefault();
    $body.toggleClass("show-off-screen-content");
    $(".scrollbar-inner").stop().animate(
      {
        scrollTop: 0,
      },
      800
    );
    $(".off-screen-navigation a").removeClass("active");
  });

  $(".off-screen-content [id]").each(function () {
    $(this).attr("data-scroll-offset", $(this).offset().top);
  });

  $(".off-screen-navigation a:not(.new-window)").on("click", function (e) {
    e.preventDefault();
    $(".off-screen-navigation a").removeClass("active");
    $(this).addClass("active");
    $body.addClass("show-off-screen-content");
    var href = $(this).attr("href");
    $(".scrollbar-inner")
      .stop()
      .animate(
        {
          scrollTop: $(href).attr("data-scroll-offset"),
        },
        800
      );
  });

  $outerWrapper.on("click", function () {
    if ($body.hasClass("show-off-screen-content")) {
      $body.removeClass("show-off-screen-content");
    }
  });

  $(".bg-transfer").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).find("img").attr("src") + ")"
    );
  });

  var oldTimeStamp = 0;
  var newTimeStamp = 0;
  var acceleration = 80;
  var delta;

  $(".page-wrapper").on("mousewheel", function (e) {
    oldTimeStamp = newTimeStamp;
    newTimeStamp = e.timeStamp;
    acceleration = (1 / (newTimeStamp - oldTimeStamp)) * 100;
    delta = e.deltaY * -1;

    if (
      animationFinished === true &&
      delta === 1 &&
      !$body.hasClass("show-off-screen-content")
    ) {
      $(".animate").removeClass("idle");
      if ($(selectedImage).next().length) {
        nextImage = "#" + $(selectedImage).next()[0].id;
        play(nextImage);
      } else {
        nextImage = "#" + $slide.first()[0].id;
        play(nextImage);
      }
    } else if (
      animationFinished === true &&
      delta === -1 &&
      !$body.hasClass("show-off-screen-content")
    ) {
      $(".animate").removeClass("idle");
      if ($(selectedImage).prev().length) {
        prevImage = "#" + $(selectedImage).prev()[0].id;
        play(prevImage);
      } else {
        prevImage = "#" + $slide.last()[0].id;
        play(prevImage);
      }
    }
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// On Load
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(window).on("load", function () {
  $(".animate").addClass("in");
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function drawScrollbar() {
  $(".iframe-page .page-wrapper").addClass("scrollbar-inner");
  $(".iframe-page .scrollbar-inner").scrollbar();
}
