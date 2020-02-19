const mocha = require("mocha");
const expect = require("chai").expect;
const calc = require("../src/calc"); // Test Target

console.log(calc.calcModyfyNumber(600, 200));

describe("1. calcModyfyNumber unit tests", function() {
  it("fitspeedぴったりの倍率がある場合current属性のみを返却する", function() {
    const result = calc.calcModyfyNumber(450,100);
    expect(result.before).is.undefined;
    expect(result.current).is.not.undefined;
    expect(result.current.modifyNumber).is.eql(4.5);
    expect(result.current.revisionSpeed).is.eql(450);
  });
  it("fitspeedに到達する倍率がない場合、最も近い倍率のみを返却する", function() {
    const result = calc.calcModyfyNumber(2000,100);
    expect(result.before).is.undefined;
    expect(result.current).is.not.undefined;
    expect(result.current.modifyNumber).is.eql(8.0);
    expect(result.current.revisionSpeed).is.eql(800);
  });
  it("fitspeedに到達する倍率が0.25(最低)の場合、最低値のみを返却する", function() {
    const result = calc.calcModyfyNumber(100,401);
    expect(result.before).is.undefined;
    expect(result.current).is.not.undefined;
    expect(result.current.modifyNumber).is.eql(0.25);
    expect(result.current.revisionSpeed).is.eql(100.25);
  });
  it("fitspeedに到達する倍率があったとき、その直前の倍率も返却する", function() {
    const result = calc.calcModyfyNumber(600,170);
    expect(result.before).is.not.undefined;
    expect(result.current).is.not.undefined;
    expect(result.current.modifyNumber).is.eql(3.75);
    expect(result.current.revisionSpeed).is.eql(637.5);
    expect(result.before.modifyNumber).is.eql(3.5);
    expect(result.before.revisionSpeed).is.eql(595);
  });
});