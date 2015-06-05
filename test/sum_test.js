/* global describe, it, expect */

describe("Sum mixin", function() {
    it("should calculate sum of array", function() {
        expect(_.sum([1,2,3,4])).toEqual(10);
        expect(_.sum([1,2,3,4,5])).not.toEqual(14.99);
        expect(_.sum([-1,-2,3,4,5])).toEqual(9);
    });
});