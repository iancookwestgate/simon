import './sass/styles.scss';
import $ from 'jquery';
import { randomColor } from './simon.js';




$("#start-game").click(function() {
  $("#start-game").hide();
  $(".buttons").show();
  randomColor();
});
