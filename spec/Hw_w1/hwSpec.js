describe("Homework function", function() {
  var Hw = require('../../lib/homework/Homework');
  var hw;

  beforeEach(function() {
    hw = new Hw();
  });

  it("Convert meter to Foot", function() {
    var inputLists = [1, -10, '', '20', 'Test'];
    
    var result = inputLists.map(function(cur, index, arr) {
      return hw.meterToFoot(cur);
    });
    expect(result[0]).toBe(3.28084);
    expect(result[1]).toBe(-32.8084);
    expect(result[2]).toBe('Wrong input, Please enter the number.');
    expect(result[3]).toBe(65.6168);
    expect(result[4]).toBe('Wrong input, Please enter the number.');
  });

  it("Convert meter to Yard", function() {

  });
});