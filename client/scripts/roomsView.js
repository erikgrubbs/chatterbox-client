var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  

  initialize: function() {
    Rooms.allRooms.forEach(room => {
      RoomsView.renderRoom(room);
    });
    if (Rooms.allRooms[0]) {
      Rooms.current = Rooms.allRooms[0]; 
    } else {
      Rooms.current = 'lobby';
      RoomsView.renderRoom('lobby');
      MessagesView.initialize();
    }
  },

  renderTemplate: _.template('<option><%- room %></option>'),  

  renderRoom: function(roomname) {
    RoomsView.$select.append(this.renderTemplate({room: roomname}));
  }

};

RoomsView.$select.change(function() {
  Rooms.current = $(this).children(':selected').val();
  MessagesView.$chats.empty();
  MessagesView.initialize();
});




