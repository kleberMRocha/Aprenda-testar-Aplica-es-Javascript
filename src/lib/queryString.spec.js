const { queryString } = require('./queryString');

describe('queryString.js', () => {

    const obj = { name: 'kleber', age: '29' }

    it('should create a query string from an object', () => {
        expect(queryString(obj)).toBe('name=kleber&age=29');
    });

});