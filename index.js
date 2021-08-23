// $("h1").text("New Text");
//
// $("button").html("<em>Hey</em>");
// $("a").attr("href", "https://www.yahoo.com");
// $("h1").click(function() {
//   $("h1").css("color", "green");
// })

// $("button").click(function () {
//   $("h1").css("color", "purple");
// });

// $(document).keydown(function (event) {
//   console.log(event);
//   $("h1").text(event.key);
// });
$("button").on("click", function () {
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
