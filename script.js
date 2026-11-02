$(document).ready(function () {
  console.log("jQuery is ready!");
  $("h1").css("letter-spacing", "1px");
  $(".intro").css("color", "teal");
  $("#headline").css("font-style", "italic")
  $("#btn-text").click(function () {
    $("#headline").text("aspiring software engineer");
  });

  $("#btn-html").click(function () {
    $("#greeting").html("Hello! i am <b>learning jquery</b> right now.");
  });

  $("#btn-dark").click(function () {
    $("body").css({ "background-color": "#11161d", "color": "#e6ebf1" });
  });

  $("#btn-light").click(function () {
    $("body").css({ "background-color": "#ffffff", "color": "#000000" });
  });
  $("#btn-hide").click(function () {
    $("#status, #facts").hide();
});

  $("#btn-show").click(function () {
    $("#status, #facts").show();
});

  $("#btn-toggle").click(function () {
    $("#status, #facts").toggle();
});
  $("#btn-fadeout").click(function () {
  $(".gallery img").fadeOut();
});

$("#btn-fadein").click(function () {
  $(".gallery img").fadeIn();
});

$("#btn-fadetoggle").click(function () {
  $(".gallery img").fadeToggle();
});
 $(".panel").hide();

$(".topic").click(function () {
  $(this).next(".panel").slideToggle();
});

$("#btn-open").click(function () {
  $(".panel").slideDown();
});

$("#btn-close").click(function () {
  $(".panel").slideUp();
});
 $("#skill-error").hide();

$("#btn-add").click(function () {
  var skill = $("#skill-input").val().trim();
  if (skill === "") {
    $("#skill-error").show();
  } else {
    $("#skill-error").hide();
    $("#skill-list").append("<li>" + skill + "</li>");
    $("#skill-input").val("");
  }
});

$("#btn-prepend").click(function () {
  var skill = $("#skill-input").val().trim();
  if (skill === "") {
    $("#skill-error").show();
  } else {
    $("#skill-error").hide();
    $("#skill-list").prepend("<li>" + skill + "</li>");
    $("#skill-input").val("");
  }
});

$("#btn-remove").click(function () {
  $("#skill-list li").last().remove();
});
 $("#href-text").text($("#social").attr("href"));

$("#btn-link").click(function () {
  $("#social").attr("href", "https://www.tiktok.com/@i.glmm");
  $("#social").text("TikTok");
  $("#href-text").text($("#social").attr("href"));
});
$("#contact-form").on("submit", function (e) {
  e.preventDefault();
});

$("#user-name").on("input", function () {
  $("#live-name").text($(this).val());
});

$("#user-email").on("input", function () {
  $("#live-email").text($(this).val());
});
var filled = false;

$("#btn-animate").click(function () {
  $(".bar").each(function () {
    var target = filled ? "0%" : $(this).data("level") + "%";
    $(this).stop().animate({ width: target }, 1000);
  });
  filled = !filled;
});
});