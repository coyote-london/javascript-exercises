const removeFromArray = function(array, a, b = 0, c =0, d = 0) {
    let removeTheseItems = [a, b, c, d];
    for (i=0; i<removeTheseItems.length; i++) {
        if (array.includes(removeTheseItems[i])) {
            array.splice(array.indexOf(removeTheseItems[i]), 1);
        }
        else {
            continue;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
