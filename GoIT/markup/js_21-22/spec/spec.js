
/*var document = typeof document === 'undefined' ? '' : document;*/

var app = require('../js/working/main.js');


describe("power test", function() {
  it("power(2,2)", function() {

  	// prepare
  	
	/*var result=app.sum(2,2);*/
  	// act
	

  	// assert
  	expect(app.power(2,2)).toBe(4);
  	
	
	
  
  });
  it("sum(2,2)", function() {
  	expect(app.power(2,8)).toBe(256);
  });
  it("sum(2,2)", function() {
  	expect(app.sum(2,2)).toBe(4);
  });
   it("sum(2,3)", function() {
  	expect(app.sum(2,3)).toBe(5);
  });
});