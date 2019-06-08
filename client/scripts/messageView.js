var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><h4> <%- username %> </h4></div>
        <div class="messageText"><p> <%- text %> </p></div>
      </div> 
    `
  )
};