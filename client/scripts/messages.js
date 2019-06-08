var Messages = {
  allMessages: [],
};

var Message = function (text) {
  this.text = text;
  this.username = App.username;
  this.roomname = Rooms.current;
};