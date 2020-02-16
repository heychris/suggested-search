const { getResults } = require('../getResults');
const data = require('./data/names.json');
const results = getResults(['smith'], data, 'name');

// TODO: Setup snapshots
test('should return John Smith object', () => {
  expect(results).toStrictEqual([
    {
      name: 'John Smith',
      title: 'Explorer',
      image: 'https: //www.nps.gov/jame/learn/historyculture/images/jsmith-apva.jpg'
    }
  ]);
});
