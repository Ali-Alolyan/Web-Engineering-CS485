const src = require('../src');

test('add 1 to 2 equal 3', ()=> {
    expect(src.sum(1,2)).toBe(3);
});