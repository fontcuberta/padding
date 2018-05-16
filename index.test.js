const paddingLeft = require('./index');

describe('Padding-left App', () => {
    test("should return the whole word when the numbers of characters are less", function () {
        expect(paddingLeft("hola", 3)).toBe("hola");
    })
    test('should fill the word with spaces before the word if the argument is bigger than the word length', function () {
        expect(paddingLeft('hola', 5)).toBe(' hola');
    });
    test('should fill the word with more spaces before the word if the argument is bigger than the word length', function () {
        expect(paddingLeft('hola', 8)).toBe('    hola');
    });
    test('should fill the space between the lenth of the word and the total number of characters with the specified in the third parameter', function () {
        expect(paddingLeft('hola', 6, '@')).toBe('@@hola');
    });
});
