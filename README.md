brochat
=======

A chat web app for bros using Node.js and MongoDB.

Usage: node server.js

Runs on port 3000 by default; point your browser [here](http://127.0.0.1:3000) after starting the server to see the UI.

## Functionality

*Currently Implemented*
- Send messages, have them broadcast to all connected to the same room
- Change nickname (nicknames are unique)
- Separate rooms
- Messages archived in DB
- Joining a room loads all messages archived in the DB for that room

*Need to Implement (decreasing importance)*
- Account system w/ authentication -- persisted in the DB
- Timestamps (displayed and in DB)
- Pagination for archived message loading
- Multiple rooms at once? / Only one room?
- Offline messaging
- Private messaging
- Hidden/private rooms?
- Plugin system
- Audio calling (plugin)
- Video calling (plugin)
- Prettier interface
- Pinging (plugin)
- Emoticons (plugin)
- Pretty favicon
- Embedded Youtube vids with optional sync (plugin)
- Typing indicator (plugin)?
- Fun gaemz ex. minesweeper (JASON WANTS HAXBALL) (plugins)
- Porn integration (per Jae)
- Morse code translator (per Tony)
- Tom Brady picture of the day (per Tony)
- Pizza delivery (per Tony)
- many, many other things TBD

## Organization

Under the root folder is [server.js](https://github.com/Acrospino/brochat/blob/master/server.js), which... serves.

#### lib

Server code; contains [chat_server.js](https://github.com/Acrospino/brochat/blob/master/lib/chat_server.js), which runs the chat server using SocketIO.

#### public

Client code.  [index.html](https://github.com/Acrospino/brochat/blob/master/public/index.html) is the HTML template for the page.

###### javascripts

[chat.js](https://github.com/Acrospino/brochat/blob/master/public/javascripts/chat.js) contains the client code using SocketIO, while [chat_ui.js](https://github.com/Acrospino/brochat/blob/master/public/javascripts/chat_ui.js) handles the user interface with JQuery.

###### stylesheets

[style.css](https://github.com/Acrospino/brochat/blob/master/public/stylesheets/style.css) determines the look of the site.
