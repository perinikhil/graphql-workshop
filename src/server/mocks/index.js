const nock = require('nock');

const api = nock('http://example.com/api').persist();

api.get('/hotels/')
  .reply(200, () => ({
    hotels: [{
      id: 1,
      name: 'Elmas',
    }, {
      id: 2,
      name: 'Nova'
    }]
  }));

api.get(/\/hotels\/\d/)
  .reply(200, (path) => {
    const id = path.split('/').pop();
    return {
      hotel: {
        id,
      }
    };
  });
