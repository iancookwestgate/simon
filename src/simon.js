import $ from 'jquery';
import { selectColors } from './index.js';

export var colors = [];
export var passed;

$(".buttons").hide();
$('.submit').hide();

export function empty2() {
  colors = [];
}

export function randomColor() {

  var random = Math.floor((Math.random() * 6) + 1);
  if (random == 1) {
    $(".simons-colors").css("background-color", "red");
    colors.push("Red");
  }
  if (random == 2) {
    $(".simons-colors").css("background-color", "orange");
    colors.push("Orange");
  }
  if (random == 3) {
    $(".simons-colors").css("background-color", "yellow");
    colors.push("Yellow");
  }
  if (random == 4) {
    $(".simons-colors").css("background-color", "green");
    colors.push("Green");
  }
  if (random == 5) {
    $(".simons-colors").css("background-color", "blue");
    colors.push("Blue");
  }
  if (random == 6) {
    $(".simons-colors").css("background-color", "violet");
    colors.push("Violet");
  }
}





export function replayColors() {
  var length = colors.length;
  var i;
  for (i = 0; i < length; i++) {
    var color = colors[i];
    playColor(color, i);

  }
  setTimeout(function() {
    if(i == length) {
      randomColor();
    }
  }, 2000 * i);
  setTimeout(function() {
    if(i == length) {
      $(".simons-colors").css("background-color", "white");
      $("#next-round").show();
      $(".buttons").show();
    }
  }, 2000 * i + 1000);
}



function playColor(color, i) {
  setTimeout(function() {
    $(".simons-colors").css("background-color", color);
  }, 2000 * i);
  setTimeout(function() {
    $(".simons-colors").css("background-color", "white");

  }, 2000 * i + 1000);
}




export function isEqual() {
  var isCorrect = 0;
  var length = colors.length;
  for(var i = 0; i < length; i++) {
    if(selectColors[i] == colors[i]) {
      isCorrect = isCorrect + 1;
    }
  }
  if(isCorrect == length) {
    passed = true;
  } else {
    passed = false;
  }
}
