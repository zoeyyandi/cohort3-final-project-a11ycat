#!/usr/bin/env node

/**
 * Module dependencies.
 */
import debug from 'debug';
import http from 'http';

import setupApp from '../app';
import logger from '../config/logger';

const serverDebug = debug('server:server');

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(
    process.env.PORT
        || '3001'
);

setupApp()
    .then(
      app => {
          app.set('port', port);

          /**
           * Create HTTP server.
           */

          const server = http.createServer(app);

          /**
           * Listen on provided port, on all network interfaces.
           */

          server.listen(port, '0.0.0.0');
          server.on('error', onError);
          server.on('listening', onListening(server));
      }
);


/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = server => () => {
  const addr = server.address();

  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;

    logger.info(`Listening on ${bind}`);
    serverDebug(`Listening on ${bind}`);
};
