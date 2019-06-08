var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var roomMessages = Messages.allMessages.filter(function(msg) {
      return msg.roomname === Rooms.current;
    });
    for (var i = 0; i < roomMessages.length; i++) {
      MessagesView.renderMessage(roomMessages[i]);
    }
  },

  renderMessage: function(message) {
    MessagesView.$chats.append(MessageView.render({
      username: message.username,
      text: message.text
    }));
  }  

};