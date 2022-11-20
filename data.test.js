require('json5/lib/register');
const data = require('./data.json5');

test('data', () => {
    expect(data.value).toStrictEqual(42);
});
