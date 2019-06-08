var Friends = {
  friends: []

};

$('body').on("click", ".username", function() {
  if (this.innerText === App.username) {
    alert('you can\'t be friends with yourself! come on');
    return;
  }
  if (Friends.friends.length === 0) {
    $('.friendslist').empty();
  }
  if (!Friends.friends.includes(this.innerText)) {
    Friends.friends.push(this.innerText);
    $('.friendslist').append('<p>' + this.innerText + '</p>');
  }
   
});