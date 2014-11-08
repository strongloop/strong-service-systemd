var assert = require('assert');
var render = require('../');

var options = {
  name: 'strong-pm',
  author: 'Current User',
  description: 'Node application server',
  execpath: '/custom/path/to/node',
  script: '/custom/path/to/my/script.js',
  created: '2014-08-22T00:00:00.000Z',
  env: {
    FOO: 'foo',
    BAR: 'bar',
  },
};

var ENV_FOO = /^Environment=FOO=foo$/m;
var ENV_BAR = /^Environment=BAR=bar$/m;

var result = render(options);

assert(ENV_FOO.test(result));
assert(ENV_BAR.test(result));
