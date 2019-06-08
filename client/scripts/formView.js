var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    RoomsView.$button.click(function() {
      $('#roomform').toggle();
    });
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    App.startSpinner();
    var input = new Message(document.getElementById('message').value);
    $('#message').val('');
    Parse.create(input); 
    App.fetch(function() {
      FormView.initialize();
      MessagesView.initialize();
      App.stopSpinner();
    });  
    event.preventDefault();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
    FormView.$form.find('input[type=text]').attr('disabled', status);
  }
  
  
};

var RoomsForm = {
  $roomforminput: $('#nameform'),
  $roomformsubmit: $('#roomform button'),
  handleSubmit: function() {
    alert('works');
  }
};

RoomsForm.$roomformsubmit.click(function() {
  Rooms.current = RoomsForm.$roomforminput.val();
  $('#roomform').toggle();
  RoomsView.renderRoom(Rooms.current);
  MessagesView.$chats.empty();
  MessagesView.initialize();
});