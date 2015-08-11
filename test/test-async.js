var common = require('./common');
var render = require('../');
var tap = require('tap');

var expected = common.fixture('strong-pm.service');
var options = {
  name: 'strong-pm',
  author: 'Current User',
  description: 'Node application server',
  execpath: '/custom/path/to/node',
  script: '/custom/path/to/my/script.js',
  created: '2014-08-22T00:00:00.000Z',
};

tap.test('async mode', function(t) {
  render(options, function(err, job) {
    t.ifError(err, 'should not error');
    t.equal(job, expected, 'renders correctly');
    t.end();
  });
});

