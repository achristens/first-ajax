document.addEventListener("DOMContentLoaded", function() {
  var stepOne = document.querySelector('#step-one');
  var pingPong = document.querySelector('#ping-pong');
  var section  = document.querySelector('#step3456');
  var hiveMind = document.querySelector('#hive');
  var section2 = document.querySelector('#step7');
  var time     = document.querySelector('#time');
  var section3 = document.querySelector('#step8');

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

  time.addEventListener('click',function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone:'Asia/Kolkata'},
      dataType: 'text'
    }).done(function(responseData){
      var offset =
      console.log(responseData);
      var element = document.createElement('p');
      element.innerHTML = responseData;
      section3.append(element);
    });
  })
});
