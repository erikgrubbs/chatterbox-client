var MessageView = {

  render: _.template(`
      <div class="chat">
        <h4 class="username"> <%- username %> </h4>
        <div class="messageText"><p> <%- text %> </p></div>
      </div> 
    `
  )
};