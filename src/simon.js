import $ from 'jquery';


$(".buttons").hide();

export function randomColor() {
  debugger;

  var random = Math.floor((Math.random() * 6) + 1);
  if (random == 1) {
    $(".simons-colors").css("background-color", "red");
  }
  if (random == 2) {
    $(".simons-colors").css("background-color", "orange");
  }
  if (random == 3) {
    $(".simons-colors").css("background-color", "yellow");
  }
  if (random == 4) {
    $(".simons-colors").css("background-color", "green");
  }
  if (random == 5) {
    $(".simons-colors").css("background-color", "blue");
  }
  if (random == 6) {
    $(".simons-colors").css("background-color", "violet");
  }
}
