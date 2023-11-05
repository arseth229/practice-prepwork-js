function divideByThree(num) {
    /* Returns the passed in number argument divided by three. */
    // Your code here
    return num / 3;
};

function averageOfTwo(num1, num2) {
    /* Returns the average of two numbers, num1 and num2. */
    // Your code here
    let avg = num1 + num2;
    return avg / 2;
};

function averageOfFour(num1, num2, num3, num4) {
    /* Takes in four numbers. The function should return the average of all of
    the numbers. */
    // Your code here
    let foAvg = num1 + num2 + num3 + num4;
    return foAvg / 4;
};

function doubler(nums) {
    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
    // Your code here
    let doubleNum = [];
    let index = 0;
    while (index < nums.length) {
        let oldNum = nums[index];
        let newNum = oldNum * 2;
        doubleNum = doubleNum.concat(newNum);
        index += 1
    }
    return doubleNum;
};


function combineArrays(arr1, arr2) {
    /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
    // Your code here
    let comArr = arr1.concat(arr2);
    return comArr
};

function wordWithinArray(word, arr) {
    /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */
    // Your code here
    let locator = arr.indexOf(word);
    if (locator > -1) {
        return true;
    }
    else if (locator === -1) {
        return false;
    }
};

function echo(str) {
    /* Takes in a string and returns that string "echo-ized". E.g.
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
    // Your code here
    let echoStr = str.toUpperCase() + " ... " + str + " ... " + str.toLowerCase();
    return echoStr;

};

function fizzBuzz(max) {
    /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
    // Your code here
    let fizzArr = [];
    for (let index = 0; index < max; index += 1) {
        if (index % 5 === 0 && index % 3 !== 0) {
            fizzArr = fizzArr.concat(index);
        }
        else if (index % 5 !== 0 && index % 3 === 0) {
            fizzArr = fizzArr.concat(index);
        }
    }
    return fizzArr;
};

function hello(name) {
    /* Takes in a string name and returns a string saying "Hello, " to that name. */
    // Your code here
    let greet = "Hello, " + name;
    return greet;
};

function goodbye(name) {
    /* Takes in a string name and returns a string saying "Bye, " to that name. */
    // Your code here
    let dip = "Bye, " + name;
    return dip;
};

function isFive(num) {
    /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
    // Your code here
    if (num === 5) {
        return true;
    }
    else if (num !== 5) {
        return false;
    }
};

function isOdd(num) {
    /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
    // Your code here
    if (num % 2 === 0) {
        return false;
    }
    else if (num % 2 !== 0) {
        return true;
    }
};

function isSubString(searchString, subString) {
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    // Your code here
    let serStr = searchString.toLowerCase();
    let subStr = subString.toLowerCase();
    if (serStr.indexOf(subStr) === -1) {
        return false;
    }
    else if (serStr.indexOf(subStr) !== -1) {
        return true;
    }
};

function aCounter(word) {
    /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

    /*
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */
    // Your code here
    let count = 0;
    for (let index = 0; index < word.length; index += 1) {
        let char = word[index];
        if (char === "a" || char === "A") {
            count += 1;
        }
    }
    return count;
};

module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter
}
