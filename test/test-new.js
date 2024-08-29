const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;

describe('GET /', function() {
  it('responds with status 200', async function() {
    const response = await axios.get('http://localhost:3000');
    expect(response.status).to.equal(200);
  });
});
