function tiempoDelDia() {
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    $("#ciudad").val() +
    "&appid=7490ba3dbd45700ca1a91b4328446781";
  $.ajax({
    url: url,
    type: "GET",
  }).done(function (response) {
    var result = "";
    var tiempo = response.weather[0];
    result +=
      "<div class='card'><div class='row g-0'><div class='col-5 col-sm-4'><img src='http://openweathermap.org/img/wn/" +
      tiempo.icon +
      "@2x.png'></div><div class='col-7 col-sm-8'><div class='card-body><h1 class='card-title'>" +
      tiempo.description +
      "</h1></div></div></div></div>";
    $("#result").html(result);
  });
}
function tiempoDe5Dias() {
  var url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    $("#ciudad").val() +
    "&appid=7490ba3dbd45700ca1a91b4328446781";
  $.ajax({
    url: url,
    type: "GET",
  }).done(function (response) {
    var result = "";
    posi = 4;
    while (posi < 40) {
      var tiempo = response.list[posi].weather[0];
      result +=
        "<div class='card'><div class='row g-0'><div class='col-5 col-sm-4'><img src='http://openweathermap.org/img/wn/" +
        tiempo.icon +
        "@2x.png'></div><div class='col-7 col-sm-8'><div class='card-body><h1 class='card-title'>" +
        tiempo.description +
        "</h1></div></div></div></div>";
      posi += 8;
    }
    $("#result").html(result);
  });
}
$(function () {
  $("#search").hide();
  $(".nav-item")
    .first()
    .on("click", function () {
      $("#search").hide();
      $("#main").show();
    });
  $(".nav-item")
    .first()
    .next()
    .on("click", function () {
      $("#search").show();
      $("#main").hide();
    });
  $("#btnundia").on("click", function () {
    tiempoDelDia();
  });
  $("#btntiempo").on("click", function () {
    tiempoDe5Dias();
  });
});
