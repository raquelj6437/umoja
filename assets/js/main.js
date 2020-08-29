$(document).ready(function() {
  function writeUserData(name, email, message) {
    firebase.database().ref(d.getMonth().toString() +'-'+ d.getDate().toString()+'/').push().set({
      name: name,
      email: email,
      message: message
    });
  }
  $("#submit").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name == '' || email == '' || message == ''){
      alert("Please fill in all the fields.");
    }
    else {
      writeUserData(name, email, message);
      alert("Thank you for your response!")
      location.reload(true)
    }
  });

  var d = new Date();
});
