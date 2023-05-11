// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
	// you can add any code you want within this function scope
	
    function caesar(input = "", shift = 0, encode = true) {
        const defaultAlphabet = [
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
        ];
        //result from validator
        const valid = validator(shift);  
        // result from shifter
        let shiftifiedAlphabet = shifter(defaultAlphabet, shift); 
        if (!valid) {
            return false
        }
        else if (valid && encode) {
            /*
            encodes input by
            splitting input into an array with each letter as an element
            uses indexer to create an array of indexes of each letter in relation to a shiftedalphabet
            shifted alphabet is provided by shifter
            uses characterer to create an array of letters corresponding to the elements in the array of indexes
            joins the elements in the character array converting it into a string and returning it
            */
			return characterer(  
				defaultAlphabet,
				indexer(shiftifiedAlphabet, input.toLowerCase().split(""))
            ).join("");
		} else if (valid && !encode) {
            /**
             decodes by
             same as encode except the default alphabet is used instead of a shifted one
             */
			return characterer(
				shiftifiedAlphabet,
				indexer(defaultAlphabet, input.toLowerCase().split(""))
			).join("");
        } 
	}

	console.log(caesar("message", 3));
    console.log(caesar("phvvdjh", 3, false));
    
    function validator(shift) {

        /*
        takes in shift with the intention of verifying that it is valid for use in cesar
         */
		return shift === 0 || shift < -25 || shift > 25 ? false : true;
	}
    function indexer(alphabet = [], input = []) {
        /* 
        takes in and alphabet and input array (input split into an array)
        with the intention of converting letters into index numbers
        loops through the input array
        if the current character being accessed is a character in the alphabet array
        the index number of that character in the alphabet array is pushed into the result array
        if the character is not found in the alphabet array it is pushed without modification
        the result array is returned after the loop is complete
        */
        
		let result = [];
		input.forEach((char) => {
			if (alphabet.includes(char)) {
				result.push(alphabet.indexOf(char));
			} else {
				result.push(char);
			}
		});
		console.log(result);
		return result;
    }
    function characterer(alphabet = [], input = []) {
        /*
        takes in an alphabet and the input ( converted from string to array with each element representing their index numbers)
        with the intention of converting the numbers into letters
        loops through the input
        checks to make sure the element is a number
        checks the value of the alphabet array at that index and pushes it to the result array
        if the element is not a number it is pushed to the result array without modification
        the result array is returned once the loop is complete
        */
		result = [];
		input.forEach((element) => {
			if (typeof element === "number") {
				result.push(alphabet[element]);
			} else {
				return result.push(element);
			}
		});
		console.log(result);
		return result;
	}
    function shifter(alphabet = [], shift = 1) {
        
        /* 
        takes in the shift amount with the intention of shifting an alphabet right or left depending on the amount
        checks to see if the shift is positive or negative
        starts a loop with the length of the shift amount. 
        if the number is negative it is converted to positive for its use as a loop duration
        loops through the alphabet array
        if shift  is negative 
        the first letter is moveed to the end of the array
        if shift is positive
        the last letter is moved to the fron of the array
        this is repeated for whatever the shift amount is
        the shifted alphabet is returned once the loop is complete
        
        
        */
		let newAlphabet = [...alphabet];

		if (shift < 0) {
			for (let i = 0; i < Math.abs(shift); i++) {
				let firstChar = newAlphabet.shift();
				newAlphabet.push(firstChar);
			}
		} else {
			for (let i = 0; i < shift; i++) {
				let lastChar = newAlphabet.pop();
				newAlphabet.unshift(lastChar);
			}
		}

		return newAlphabet;
	}
	return {
		caesar,
	};
})();

module.exports = { caesar: caesarModule.caesar };
