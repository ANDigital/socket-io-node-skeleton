# AND Digital Socket.IO & Node.JS demo app

This is a Skeleton Node.JS app which will serve up a html file and some JS which will present a very basic Socket.io chat application.

There are several features yet to be added - which is the point of the exercise :) 

## Running the app

#### install dependencies

```sh
$ npm install

```

#### run the server

```sh
$ node index.js

```

## Things to do...

### Add the following routes

- [GET] /messages - will render a JSON blob containing all of the messages created
- [GET] /online - will display a JSON blob showing the current number of online users
- [POST] /message - will take a JSON blob with some text, and add a new message to the chat with this text

### Add new functionality
- Users should have a Username, which should be displayed next to messages.
- Messages should show a timestamp
- Show '{username} is typing' message when a user is typing a message
- Display a list of online users
