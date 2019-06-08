var App = {

  $spinner: $('.spinner img'),
  username: 'anonymous',


  initialize: function() {
    App.username = window.location.search.substr(10);

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(function() {
      FormView.initialize();
      RoomsView.initialize();
      MessagesView.initialize();
      App.stopSpinner();
    });
 
  },

  fetch: function(callback) {
    MessagesView.$chats.empty();
    var newMessages = [];
    var newRooms = [];
    Messages.allMessages = newMessages;
    Rooms.allRooms = newRooms;
    Parse.readAll((data) => {
      data.results.forEach(msg => {
        if (msg.username && msg.roomname && msg.text) {
          if (msg.roomname.length > 0 && !msg.roomname.includes('<')) {
            Messages.allMessages.push(msg);
            if (!Rooms.allRooms.includes(msg.roomname)) {
              Rooms.allRooms.push(msg.roomname);
            }  
          }             
        } 
      });
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
