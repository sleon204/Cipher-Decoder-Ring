// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
    // you can add any code you want within this function scope
  function polybius(input, encode = true) {
      decodeAlphabet = {
          11: "a",
          21: "b",
          31: "c",
          41: "d",
          51: "e",
          12: "f",
          22: "g",
          32: "h",
          42: "(ij)",
          52: "k",
          13: "l",
          23: "m",
          33: "n",
          43: "o",
          53: "p",
          14: "q",
          24: "r",
          34: "s",
          44: "t",
          54: "u",
          15: "v",
          25: "w",
          35: "x",
          45: "y",
          55: "z",
      };
      encodeAlphabet = {
          a: "11",
          b: "21",
          c: "31",
          d: "41",
          e: "51",
          f: "12",
          g: "22",
          h: "32",
          i: "42",
          j: "42",
          k: "52",
          l: "13",
          m: "23",
          n: "33",
          o: "43",
          p: "53",
          q: "14",
          r: "24",
          s: "34",
          t: "44",
          u: "54",
          v: "15",
          w: "25",
          x: "35",
          y: "45",
          z: "55",
      };
      let result = [];
  
      if (encode) {
          
          
          /*
            encodes by
            looping through input
            checking to see if the current element is present in the encode alphabet
            if not then its pushed into the result array
            if it is then its value in the encode alphabet is pushed to the result array
            the result array is then joined to creat a string and returned
           */
          for (let i = 0; i < input.length; i++) {
              const element = input[i].toLowerCase();
  
              if (encodeAlphabet[element] === undefined) {
                  result.push(element);
              } else {
                  result.push(encodeAlphabet[element]);
              }
          }
          return result.join("");
      } else {
          
          /*
          before decoding
           the input must be formatted into number pairs
           if the pairs array diesnt exist the function ends
           otherwise decoding is the same except the 
           decode alphabet is used instead of the encode
          */
          const pairs = formatInputIntoPairs(input);
  
          if (!pairs) {
              return result = false
          } else { 
  
          for (let i = 0; i < pairs.length; i++) {
              const element = pairs[i].toLowerCase();
  
              if (decodeAlphabet[element] === undefined) {
                  result.push(element);
              } else {
                  result.push(decodeAlphabet[element]);
              }
          }
          return result.join("");
      }
      }
  }
  console.log(polybius("Hello Thinkful!")); //> encodes to: "3251131343 4432423352125413!"
  console.log(polybius("3251131343 4432423352125413!", false)); //> decodes to: "Hello Thinkful!"
  
    function formatInputIntoPairs(input) {
      /*
      takes in an input string
       checkes to see if its valid by
       removing the spaces and making sure the length is even
       if the length is odd false is returned
        if even it creates an array with number pairs as its elements by
        looping through the input
        every element is checked against a list of valid numbers
        if the element isnt found in the valid numbers list
        it is pushed into the results array
        if the element is found in the valid list the current element 
        and the next one are pushed into the results array and 
        the index incremented by 1 artificially then 1 by the loop itself totalling 2
        at the end of the loop the pairs array is returned

      */

      if (input.replace(' ', '').replace('!', '').length % 2 === 0) {
          const validDigits = "1234567890";
          let pairs = [];
  
          for (let i = 0; i < input.length; i++) {
              const element = input[i];
              if (!validDigits.includes(element)) {
                  pairs.push(element);
              } else {
                  let slice = input.slice(i, i + 2);
                  pairs.push(slice);
                  console.log(pairs);
                  i++;
              }
          }
          return pairs
      } else {
          return false
      }
  }
    
  
    return {
      polybius,
    };
  })();
  
  module.exports = { polybius: polybiusModule.polybius };
  