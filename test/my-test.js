/**
 * テストの内容
 */
var myTest = function() {
  // TDD
  mocha.setup('tdd');
  var assert = chai.assert;
  suite('TDDでのテストの例', function() {
    suite('#myMethod()', function() {
      test('5を与えると20となる', function() {
        assert.equal(myMethod(5), 20);
      });
      test('10を与えると20より多くなる', function() {
        assert.isAbove(myMethod(10), 20);
      });
    });
  });

  // BDD expect
  mocha.setup('bdd');
  var expect = chai.expect;
  describe('BDD(expect)でのテストの例', function() {
    describe('#myMethod()', function() {
      it('5を与えると20となる', function() {
        expect(myMethod(5)).to.be.equal(20);
      });
      it('10を与えると20より多くなる', function() {
        expect(myMethod(10)).to.be.above(20);
      });
    });
  });

  // BDD should
  mocha.setup('bdd');
  var should = chai.should();
  describe('BDD(should)でのテストの例', function() {
    describe('#myMethod()', function() {
      it('5を与えると20となる', function() {
        myMethod(5).should.be.equal(20);
      });
      it('10を与えると20より多くなる', function() {
        myMethod(10).should.be.above(20);
      });
    });
  });

  // テスト実行
  mocha.run();
};