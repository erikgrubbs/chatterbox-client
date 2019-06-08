var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    Rooms.allRooms.forEach(room => {
      RoomsView.renderRoom(room);
    });
    Rooms.current = Rooms.allRooms[0]; 
  },

  renderTemplate: _.template('<option><%- room %></option>'),  

  renderRoom: function(roomname) {
    RoomsView.$select.append(this.renderTemplate({room: roomname}));
  }

};
