var common = require('./common');
var render = require('../');
var tap = require('tap');

var options = {
  name: 'strong-pm',
  author: 'Current User',
  description: 'Node application server',
  execpath: '/custom/path/to/node',
  script: '/custom/path/to/my/script.js',
  created: '2014-08-22T00:00:00.000Z',
};

var expected = common.fixture('strong-pm.service');

tap.test('simple render', function(t) {
  var result = render(options);
  t.equal(result, expected, 'should render correctly');
  t.end();
});
