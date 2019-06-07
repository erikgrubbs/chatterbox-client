var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    console.log(Messages.allMessages);
    for (var i = 0; i < Messages.allMessages.length; i++) {
      console.log(MessageView.render);
      console.log(i);
      console.log('username', Messages.allMessages[i].username);
      console.log('text', Messages.allMessages[i].text);
      MessagesView.$chats.append(MessageView.render({
        username: Messages.allMessages[i].username,
        text: Messages.allMessages[i].text
      }));
    }
  
  
  },


  renderMessage: function(message) {
    MessagesView.$chats.append('<p>message.text</p>');
  }

};