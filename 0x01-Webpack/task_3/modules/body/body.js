import $ from 'jquery';
const _ = require('lodash');
import './body.css'

$('body').append('<p>Dashboard data for the students</p>');
$('body').append(`<button type='button'>Click here to get started</button>`);
$('body').append(`<p id='count'></p>`);

let clicks = 0;

const updateCounter = function() {
  clicks++;
  $('#count').text(`${clicks} clicks on the button`);

}
$('button').on('click', _.debounce(updateCounter, 500));
