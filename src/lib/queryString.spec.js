const { queryString, parse } = require('./queryString');

describe('queryString.js', () => {

    const obj = { name: 'kleber', age: '29' }
    const obj02 = { name: 'kleber', age: '29', skills: ['Javascript', 'css', 'html'] };
    const obj03 = { name: 'kleber', age: '29', skills: { fronend: "'Javascript''css', 'html'" } };

    it('should create a query string from an object', () => {
        expect(queryString(obj)).toBe('name=kleber&age=29');
    });

    it('should create a query string from an object even if one of its values ​​is an array', () => {
        expect(queryString(obj02)).toBe('name=kleber&age=29&skills=Javascript%2Ccss%2Chtml');
    });

    it('should throw a new error if the entered values ​​contain a nested object value', () => {

        expect(() => {
            queryString(obj03)
        }).toThrowError();
    });

    it('should create a object from an query string ', () => {

        expect(parse('name=kleber&age=29')).toEqual({ "age": "29", "name": "kleber" });
        expect(parse('name=kleber&age=29&skills=Javascript%2Ccss%2Chtml')).toEqual({ "age": "29", "name": "kleber", "skills": ["Javascript", "css", "html",] });

    });

});