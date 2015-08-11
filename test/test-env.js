var render = require('../');
var tap = require('tap');

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

tap.test('environment options', function(t) {
  t.match(result, ENV_FOO, 'should contain env var');
  t.match(result, ENV_BAR, 'should contain env var');
  t.end();
});
