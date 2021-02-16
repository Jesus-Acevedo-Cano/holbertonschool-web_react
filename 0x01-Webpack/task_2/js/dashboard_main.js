import $ from 'jquery';
const _ = require('lodash');
import '../css/main.css'

$('body').append(`<div id='logo'></div>`);
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append(`<button type='button'>Click here to get started</button>`);
$('body').append(`<p id='count'></p>`);
$('body').append('<p>Copyright - Holberton School</p>');

let clicks = 0;

const updateCounter = function() {
  clicks++;
  $('#count').text(`${clicks} clicks on the button`);

}
$('button').on('click', _.debounce(updateCounter, 500));
