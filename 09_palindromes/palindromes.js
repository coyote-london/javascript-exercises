const palindromes = function(string) {
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    letters = letters.split('');
    let output = [];
    string = string.toLowerCase().split('');
    let answer = true;
    for (i=0; i < string.length; i++) {
        if (letters.includes(string[i])) {
            output.push(string[i]);
        }
    }
    return output.join('') === output.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
