$(document).ready(function () {
//button listener;
  $('#calculator').on('submit', function () {
    event.preventDefault();

    var calculation = {};

    $.each($('#calculator').serializeArray(), function (i, field) {
      calculation[field.name] = field.value;
    });

    console.log('do this math: ', calculation);
    //only need to post since I'm not getting anything from the server; need to contatonate the operations to get to the right route;
    $.ajax({
      type: 'POST',
      url: '/calculations/' + calculation.operation,
      data: calculation,
      success: function (response) {
        console.log('this worked');
        //empty my array before the answer is appended to the DOM
        $('#answer').empty();
        addAnswer(response);
      },

      error: function (response) {
        console.log('POST didnt work');
      },
    });
    //clear the input numbers;
    $("#calculator").find("input[type=number]").val("");
  });
  //function to append the answer to the DOM;
  function addAnswer(answer){
    console.log(answer);
    $('#answer').append('<p>' + answer + '</p>');
  }

});
