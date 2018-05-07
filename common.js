$(document).ready(function() {
  window.validator = new Validator;
});

$('#r-submit').on('click', function(event){
  // get values 
  event.preventDefault();
  var email = $('#r-email');
  var password = $('#r-password');
  var validate = {
    email : {
      selector : email,
      value : email.val(),
      rules : 'required|email'
    },
    password : {
      selector : password,
      value : password.val(),
      rules : 'required|size_between:1,9'
    }
  };
  clearHighlight(validate);
  highlightError(window.validator.validate(validate));
});

function highlightError(validated) {
  for (var e of validated) {
    console.log(e);
    e.selector.addClass('is-invalid');
    e.selector.siblings("div [for="+e.selector.attr('id') +"]").html(e.message);
  }
}

function clearHighlight(validate) {
  for (var e in validate) {
    validate[e].selector.removeClass('is-invalid');
  }
}