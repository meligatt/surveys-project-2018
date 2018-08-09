import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import { makeRequest } from '../make-request';

const host = 'http://localhost:3000';
axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;



describe('makeRequest', () => {
  describe('When an invalid method is provided as arguments to the request', () => {
    it('throws an error', () => {
      expect.assertions(5);

      const endpoint = "/fake/endpoint";

      expect(() => {
        makeRequest({endpoint: endpoint, method:'POST'});
      }).toThrow("Unexpected Request method");

      expect(() => {
        makeRequest({endpoint: endpoint, method:'PUT'});
      }).toThrow("Unexpected Request method");

      expect(() => {
        makeRequest({endpoint: endpoint, method:'DELETE'});
      }).toThrow("Unexpected Request method");

      expect(() => {
        makeRequest({endpoint: endpoint, method:'PATCH'});
      }).toThrow("Unexpected Request method");

      expect(() => {
        makeRequest({endpoint: endpoint});
      }).toThrow("Unexpected Request method");

    })
  });

  describe('When a valid method is provided as arguments to the request', () => {
    it('sends a HTTP request with method set as GET', () => {
      expect.assertions(1);

      // const APP_URL = "http://localhost:3000";
      const endpoint = "/fake/endpoint";
      // set up
      const scope = nock(host)
        .get(endpoint)
        .reply(200, '{"lorem":"ipsum"}')

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
