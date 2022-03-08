const { sum } = require('./calculator');

it('should sum 2 and 2 and the result must be 4', () => {
    expect(sum(2, 2)).toBe(4);
});


it('should sum 2 and 2 and the result must be 4 even if one of then is a string', () => {
    expect(sum('2', '2')).toBe(4);
});

it('should throw a error if one of the two values dont be inputed', () => {
    expect(() => sum('', '')).toThrowError();
    expect(() => sum({})).toThrowError();
    expect(() => sum([2, 2])).toThrowError();
    expect(() => sum(null, null)).toThrowError()
});