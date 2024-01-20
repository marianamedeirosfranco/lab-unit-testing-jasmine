//Interation 2

describe("Iteration 2", () => {
  describe("Function - divide", () => {
    it("should be defined", () => {
      expect(divide).toBeDefined();
    });
    it("should take 2 arguments", () => {
      expect(divide.length).toBe(2);
    });
    it("should return the division of the two numbers", () => {
      expect(divide(1, 2)).toEqual(0.5);
      expect(divide(3, 4)).toEqual(0.75);
      expect(divide(100, 50)).toEqual(2);
    });
    it("should return undefined if any of the arguments is not provided", () => {
      expect(divide(1)).toEqual(undefined);
      expect(divide()).toEqual(undefined);
      expect(divide(undefined, 1)).toEqual(undefined);
    });
    it("should return undefined if any of the two arguments is not a number", () => {
      expect(divide(1, "2")).toEqual(undefined);
      expect(divide("3", 4)).toEqual(undefined);
      expect(divide("5", "6")).toEqual(undefined);
    });
  });
});
