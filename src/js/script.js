$("#navToggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  // this line ▼ prevents content scroll-behind
  $("body").toggleClass("locked"); 
});

$(".overlayItem").click(function() {
  $(".overlay").removeClass("open");
  $("#navToggle").removeClass("active");
});