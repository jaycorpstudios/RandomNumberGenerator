const RandomNumber = require('../src/index');

describe('Random Number Test cases', () => {

    it('should return random number in range', () => {
        expect(RandomNumber(300)).toBeLessThanOrEqual(300);
        expect(RandomNumber(1)).toBeLessThanOrEqual(1);
        expect(RandomNumber(5000)).toBeLessThanOrEqual(5000);
    });

    it('should throw an error when number is above 1000,000', () => {
        function RandomBigNumber(){
            RandomNumber(1000001);
        }
        expect(RandomBigNumber).toThrowError('Number must be less than 1000000');
    });



})