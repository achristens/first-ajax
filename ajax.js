document.addEventListener("DOMContentLoaded", function() {
  var stepOne = document.querySelector('#step-one');
  var pingPong = document.querySelector('#ping-pong');
  var section  = document.querySelector('#step3456');
  var hiveMind = document.querySelector('#hive');
  var section2  = document.querySelector('#step7');

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
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text'
    }).done(function (responseData){
      console.log(responseData);
      var addResponse = document.createElement('p');
      addResponse.innerHTML = responseData;
      section.append(addResponse);
    }).fail(function(){
      console.log("Something went wrong...");
      var element = document.createElement('p');
      element.innerHTML = "We have failed you. We are sorry. We will try harder."
      section.append(element);
    }).always(function (){
      console.log("Hey the request finished!");
    });
  });

  hiveMind.addEventListener('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData){
      console.log(responseData);
      var element = document.createElement('p');
      element.innerHTML = responseData;
      section2.append(element);
    });
  });
});
