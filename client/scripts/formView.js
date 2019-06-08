var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    App.startSpinner();
    var input = new Message(document.getElementById('message').value);
    Parse.create(input); 
    App.fetch(function() {
      FormView.initialize();
      RoomsView.initialize();
      MessagesView.initialize();
      App.stopSpinner();
    });  
    event.preventDefault();
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};