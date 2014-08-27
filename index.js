/**
 *  Server host. Simple for now. This is where we serve everything,
 *  and this is how we access, say, an API server from an HTML server
 *  on the backend.
 */

/**
 *  This is what should prepend a server-side request to a service hosted
 *  at this host.
 */

function host() {
  return 'localhost:3333';
}

host.port = 3333;
host.protocol = 'http';
host.name = 'localhost';

module.exports = host;
