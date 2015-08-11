var common = require('./common');
var render = require('../');
var tap = require('tap');

var options = {
  name: 'strong-pm',
  author: 'Current User',
  description: 'Node application server',
  execpath: '/custom/path/to/node',
  script: '/custom/path/to/my/script.js',
  created: new Date(Date.UTC(2014, 7, 22)),
};

var expected = common.fixture('strong-pm.service');

tap.test('sync mode', function(t) {
  var result = render(options);
  t.equal(result, expected, 'should render correctly in sync mode');
  t.end();
});
