$(document).ready(function() {
  //contact firebase
  function writeUserData(name, email, message) {
    firebase.database().ref(d.getMonth().toString() + '-' + d.getDate().toString() + '/').push().set({
      name: name,
      email: email,
      message: message
    });
  }
  $("#submit").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name == '' || email == '' || message == '') {
      alert("Please fill in all the fields.");
    } else {
      writeUserData(name, email, message);
      alert("Thank you for your response!")
      $("#name").val('');
      $("#email").val('');
      $("#message").val('');
    }
  });

  var d = new Date();

  $('#gallery-button').click(function() {
    alert('Coming Soon.')
  });

  //instgram firebase
  function writePostIDData(snap) {
    firebase.database().ref('id').push().set({
      snap: snap
    });
  }
  $("#IDSubmit").click(function() {
    alert('clicked')
    var id = $("#ID").val();

    // writePostIDData(id);
  });

  setTimeout(
  function()
  {
    var i;
    for (i = 0; i < 3; i++) {
      $("#feed").append('<div class="col-sm"> <iframe class="instagram-media instagram-media-rendered" id="instagram-embed-0" src="https://www.instagram.com/p/'+ postIDList[i] + '/embed/captioned/?cr=1&amp;v=10&amp;wp=1080&amp;rd=https%3A%2F%2Fblog.hubspot.com&amp;rp=%2Fmarketing%2Fembed-social-media-posts-guide#%7B%22ci%22%3A0%2C%22os%22%3A3610%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" data-instgrm-payload-id="instagram-media-payload-0" scrolling="no" style="max-width: 540px; width: calc(100% - 2px); background-color: white; box-shadow: none; display: block; min-width: 326px; padding: 0px;"></iframe> </div>');
    }
    console.log(postIDList[0])
  }, 600);


  postIDList = []

  var ref = firebase.database().ref('id/').orderByKey();
  ref.once("value").then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {

      var childData = childSnapshot.val();
      postIDList.unshift(childData['snap'])
    });
  });
});
