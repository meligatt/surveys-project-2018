import nock from 'nock';
import { makeRequest } from '../make-request';

describe('makeRequest', () => {
  describe('When an invalid method is provided as arguments to the request', () => {
    it('throws an error', () => {
      expect.assertions(5);
      expect(() => {
        makeRequest({endpoint:'/fake/endpoint/123', method:'POST'});
      }).toThrow("Unexpected Request method");

      expect(() => {
        makeRequest({endpoint:'/fake/endpoint/123', method:'PUT'});
      }).toThrow("Unexpected Request method");

      expect(() => {
        makeRequest({endpoint:'/fake/endpoint/123', method:'DELETE'});
      }).toThrow("Unexpected Request method");

      expect(() => {
        makeRequest({endpoint:'/fake/endpoint/123', method:'PATCH'});
      }).toThrow("Unexpected Request method");

      expect(() => {
        makeRequest({endpoint:'/fake/endpoint/123'});
      }).toThrow("Unexpected Request method");

    })
  });

  describe('When a valid method is provided as arguments to the request', () => {
    it('sends a HTTP request with method set as GET', () => {
      expect.assertions(1);

      const APP_URL = "http://localhost:3000";

      // set up
      const scope = nock(APP_URL)
        .get('/fake/endpoint')
        .reply(200, {lorem: "ipsum"});

      // execution
      return makeRequest({
        endpoint: '/fake/endpoint',
        method: 'GET',
      }).then(() => {
        // expectation
        expect(scope.isDone()).toBe(true);
      })
    })
  })

})
