import './sass/styles.scss';
import $ from 'jquery';
import {colors, empty2, randomColor, replayColors, isEqual, passed } from './simon.js';

export var selectColors = [];

$(document).ready(function() {




  function eraseAll() {
    $(".player-input").replaceWith("<div class='player-input'>");
  }



  $("#start-game").click(function(event) {
    $("#start-game").hide();
    randomColor();
    setTimeout(function() {
      $(".simons-colors").css("background-color", "white");
      $(".buttons").show();
      $('.submit').show();

    }, 2000);
    event.preventDefault();
  });

  $("#next-round").click(function(event) {
    isEqual();
    if(passed == true) {
      $("#next-round").hide();
      $(".buttons").hide();
      replayColors();
      event.preventDefault();
      selectColors = [];
      eraseAll();
    } else {

      empty2();
      eraseAll();
      $(".buttons").hide();
      $("#next-round").hide();
      $(".player-input").append("<h1>GIT GUD, SCRUB.</h1>");
      setTimeout(function() {
          window.location.href = "./index.html";

      }, 2000);
    }
  });

  $("#red").click(function() {

    selectColors.push("Red");
    $(".player-input").append("<p>Red</p>");

  });

  $("#orange").click(function() {
    selectColors.push("Orange");
    $(".player-input").append("<p>Orange</p>");

  });

  $("#yellow").click(function() {
    selectColors.push("Yellow");
    $(".player-input").append("<p>Yellow</p>");
  });

  $("#green").click(function() {
    selectColors.push("Green");
    $(".player-input").append("<p>Green</p>");
  });

  $("#blue").click(function() {


    selectColors.push("Blue");
    $(".player-input").append("<p>Blue</p>");
  });

  $("#violet").click(function() {
    selectColors.push("Violet");
    $(".player-input").append("<p>Violet</p>");

  });
});
