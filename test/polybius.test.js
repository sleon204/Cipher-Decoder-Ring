const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() submission tests written by Sam", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "bueller";
      const actual = polybius(message);
      const expected = "21545113135124";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "jumanji";
      const actual = polybius(message);
      const expected = "42542311334242";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "a aa aaa";
      const actual = polybius(message);
      const expected = "11 1111 111111";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "21545113135124";
      const actual = polybius(message, false);
      const expected = "bueller";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "42542311334242";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const message = "11 11";
      const actual = polybius(message, false);
      const expected = "a a";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "1234567";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});
