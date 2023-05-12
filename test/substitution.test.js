const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() submission tests written by Sam", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const message = "bueller";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const message = "bueller";
      const alphabet = "abcxyz";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const message = "bueller";
      const alphabet = "abcxyzabcxyzabcxyzabcxyzab";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const message = "bueller";
      const alphabet = "zyxwvutsrqponmlkjihgfedcba";
      const actual = substitution(message, alphabet);
      const expected = "yfvoovi";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "bueller";
      const alphabet = ".wa!sz?dx$fcygvuh*ijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "wnsccs*";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "a aa aaa";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = ". .. ...";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "yfvoovi";
      const alphabet = "zyxwvutsrqponmlkjihgfedcba";
      const actual = substitution(message, alphabet, false);
      const expected = "bueller";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "wnsccs*";
      const alphabet = ".wa!sz?dx$fcygvuh*ijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "bueller";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = ". .. ...";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet, false);
      const expected = "a aa aaa";

      expect(actual).to.equal(expected);
    });
  });
});
