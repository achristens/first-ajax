document.addEventListener("DOMContentLoaded", function() {
  var stepOne = document.querySelector('#step-one');
  var pingPong = document.querySelector('#ping-pong');
  var section  = document.querySelector('#step3456');

  stepOne.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: '{ }',
      dataType: 'text'
    });
  });

  pingPong.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
    }).done(function (responseData){
      console.log(responseData);
      var addResponse = document.createElement('p');
      addResponse.innerHTML = responseData;
      section.append(addResponse);
    });
  });
});
