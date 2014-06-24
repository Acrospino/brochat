brochat
=======

A chat client for bros.

Usage: node server.js

Runs on port 3000 by default; point your browser [here](127.0.0.1:3000) after starting the server to see the UI.

## Organization

Under the root folder is [server.js](https://github.com/Acrospino/brochat/blob/master/server.js), which... serves.

### lib

Server code; contains [chat_server.js](https://github.com/Acrospino/brochat/blob/master/lib/chat_server.js), which runs the chat server using SocketIO.

### public

Client code.  [index.html](https://github.com/Acrospino/brochat/blob/master/public/index.html) is the HTML template for the page.

#### javascripts

[chat.js](https://github.com/Acrospino/brochat/blob/master/public/javascripts/chat.js) contains the client code using SocketIO, while [chat_ui.js](https://github.com/Acrospino/brochat/blob/master/public/javascripts/chat_ui.js) handles the user interface with JQuery.

#### stylesheets

[style.css](https://github.com/Acrospino/brochat/blob/master/public/stylesheets/style.css) determines the look of the site.
