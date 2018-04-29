$(document).ready(function() {
  window.validator = new Validator;
});

$('#r-submit').on('click', function(){
  // get values 
  var email = $('#r-email');
  var password = $('#r-password');
  var dataSubmit = {
    email : {
      selector : email,
      value : email.val(),
      rules : 'required|email'
    },
    password : {
      selector : password,
      value : password.val(),
      rules : 'required|min:6'
    }
  };
  var errors = window.validator.validate(dataSubmit);
});