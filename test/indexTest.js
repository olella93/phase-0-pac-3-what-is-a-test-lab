require ( './root.js' );

const { name, height, message } = require("../index.js");

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "Susan"', () => {
      expect(name).toEqual("Joe");
    });
  });

  describe("Height", () => {
    it("is less than 40 and greater than 0", () => {
      expect(height).toBeMoreThan(40)
      expect(height).toBeLessThan(75);
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message).toInclude(name);
      expect(message).toInclude(height);
    });
  });
});
