document.addEventListener("DOMContentLoaded", function() {
  var stepOne = document.querySelector('#step-one');

  stepOne.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: '{ }',
      dataType: 'text'
    });
  });


});
