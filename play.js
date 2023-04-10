

const { connect } = require('./client');

const { setupInput } = require('./input');

// message to client saying connecting
console.log('Connecting...');

setupInput(connect());

