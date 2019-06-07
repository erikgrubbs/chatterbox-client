var App = {

  $spinner: $('.spinner img'),
  username: 'anonymous',


  initialize: function() {
    App.username = window.location.search.substr(10);

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(function() {
      App.stopSpinner();
      FormView.initialize();
      RoomsView.initialize();
      MessagesView.initialize();
    });
 
  },

  fetch: function(callback) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      for (var i = 0; i < data.results.length; i++) {
        Messages.allMessages.push(data.results[i]);
      }
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
