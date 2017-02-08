(function () {
  'use strict';

  describe('app functions', function () {
    it('says : 1+2=3', function () {
      expect(summation(1,2)).toBe(3);
    });

     it('says : 1-2=-1', function () {
       expect(summation(1,-2)).toBe(-1);
     });
  });
})();
