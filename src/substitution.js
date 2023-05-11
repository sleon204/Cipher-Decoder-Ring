// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
    // you can add any code you want within this function scope
    //do not modify above this line////////////////////////////////////////////////////////////////
    function substitution(input, alphabet, encode = true) {
        // checks to see if alphabet is present, 26 letters in length and comprised of unique characters
        if (!alphabet|| alphabet.length !== 26|| validateAlphabet(alphabet)=== false) {
            return false;
        } else {

            let result = [];
            const defaultAlphabet = "abcdefghijklmnopqrstuvwxyz";
            if (encode) {
                /*
                an array containing the inputs letters converted to index values is provided by
                getIndexOfEachChar()

                the the value of each element is checked against
                 the indexes in the alphabet array
                 if not found the element is pushed into the results array
                 if found it s pushed into the results array
                 the results array is then joined to creat a string and retuned
                */
                const inputIndexed = getIndexOfEachChar(input, defaultAlphabet);
    
                inputIndexed.forEach((element) => {
                    if (!alphabet[element]) {
                        result.push(element);
                    } else {
                        result.push(alphabet[element]);
                    }
                });
    
                return result.join("");
            } else {

                /*
                decoding is doesn the same way except swapping alphabet of default alphabet and vice versa
                */
                const inputIndexed = getIndexOfEachChar(input, alphabet);
    
                inputIndexed.forEach((element) => {
                    if (!defaultAlphabet[element]) {
                        result.push(element);
                    } else {
                        result.push(defaultAlphabet[element]);
                    }
                });
    
                return result.join("");
            }
        }
    }
    console.log(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")); //> "y&ii$r& y&ii$r&"
    console.log(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)); //> "message message"
    
    function validateAlphabet(alphabet) {

        /*
        takes in the alphabet string with the intention 
        of varifying that each character is unique
        loops through the string
        checks to see if the current element is 
        found in the charsEncountered array
        if found then false is returned and the loop ends
        if not then the current element is pushed into
        the encounter array
        if the loop complete without encountering a 
        repeat character then true is returned

        */
        let result= true
    let charsEncountered = [];
    
    for (let i = 0; i < alphabet.length; i++) {
        const char = alphabet[i];
        
        if (charsEncountered.includes(char)) {
            return false
        } else { charsEncountered.push(char) }
        }
        return result
    }

    function getIndexOfEachChar(input, alphabet) {

        /*
        takes in the input string and  alphabet string
        loops through the input string
        checks it against the alphabet string
        if the element matches one in the alphabet 
        then its index in the alphabet is pushed to the input indexed array
        if character is a space. it is pushed to the input indexed array
        the input index array is returned at the end of the loop


        */
        const inputIndexed = [];
        for (let i = 0; i < input.length; i++) {
            const char = input[i];
            charIndex = alphabet.indexOf(char);
    
            if (char === " ") {
                inputIndexed.push(char);
            } else {
                inputIndexed.push(charIndex);
            }
        }
        return inputIndexed;
    }
    
    //do not modify below this line////////////////////////////////////////////////////////////////
    return {
      substitution,
    };
  })();
  
  module.exports = { substitution: substitutionModule.substitution };
  