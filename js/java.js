$(document).ready(function() {
  // $("h1").dblclick(function() {
  //   alert("This is a header.");
  // });
  $(".clickable").click(function() {
    $("#Initially-hidden").slideToggle();
    $("#Initially-showing").slideToggle();
  });
$(".clickable1").click(function() {
    $("#local-hidden").fadeToggle();
    $("#local-showing").fadeToggle();
  });
$(".clickable2").click(function() {
    $("#bar-hidden").slideToggle();
    $("#bar-showing").slideToggle();
  });


  // $("img").hover(function() {
  //   alert("This is an image.");
  // });
  // $("h2").click(function() {
  //   alert("This is a sub-header.");
  // });
  // $("ul").click(function() {
  //   alert("This is a list.");
  // });
});

$(function(){
  $("button#red").click(function(){
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#blue").click(function(){
    $("body").removeClass();
    $("body").addClass("blue-background");
  });
  $("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background");
  });
});
