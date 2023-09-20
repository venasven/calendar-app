$(document).ready(function () {
  var timeBlocks = $('.time-block');
  timeBlocks.each(function () {
    var id = parseInt(this.id.split('-')[1]);
    var hour = dayjs().hour();
//add classes to elements based on time of day
    if (id < hour) {
      $(this).addClass('past');
    } else if (id > hour) {
      $(this).addClass('future');
    } else {
      $(this).addClass('present');
    };
//enables save button to save content to local storage
    $('button').on('click', function () {
      var eventValue = $(this).siblings('.description').val();
      var eventTime = $(this).parent().attr('id');
      localStorage.setItem(eventTime, eventValue);
    });
//shows current day in header
    $('#currentDay').text(dayjs().format('dddd, MMMM D'));
  });

  // Load saved data from local storage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
});