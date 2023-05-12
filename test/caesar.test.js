const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() submission tests written by Sam", () => {
  describe("error handling", () => {
    it("should return false if shift is 0", () => {
      const message = "shift is zero";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      const message = "niceee";
      const shift = 69;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const message = "niceee??";
      const shift = -69;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      const message = "bueller?";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "exhoohu?";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "a a a a a aaa a!?";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d d d d d ddd d!?";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "A A A A A AAA A!?";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d d d d d ddd d!?";

      expect(actual).to.equal(expected);
    });



    it("should allow for a negative shift that will shift to the left", () => {
      const message = "bueller?";
      const shift = -3;
      const actual = caesar(message, shift);
      const expected = "yrbiibo?";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const message = "exhoohu?";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "bueller?";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "d d d d d ddd d!?";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a a a a a aaa a!?";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "D D D D D DDD D!?";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a a a a a aaa a!?";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "yrbiibo?";
      const shift = -3;
      const actual = caesar(message, shift, false);
      const expected = "bueller?";

      expect(actual).to.equal(expected);
    });
  });
});
