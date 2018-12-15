function flip(){
    return Math.random() >= 0.5;
}

function RandomNumber(n){
    if(n > 1000000){
        throw new Error('Number must be less than 1000000');
    }
    const bitsLength = Number(n).toString(2).length;
    let numberInBits = '';
    for(let i = 0; i<bitsLength; i++) {
        numberInBits += flip() ? '0' : '1';
    }
    const randomNumber = parseInt(numberInBits, 2);
    return (randomNumber <= n) ? randomNumber : RandomNumber(n);
}

module.exports = RandomNumber;

console.log('Random Numbers');
console.log(RandomNumber(500));
console.log(RandomNumber(1));
console.log(RandomNumber(5000));
console.log('Execute: "yarn run test" to run test cases');

