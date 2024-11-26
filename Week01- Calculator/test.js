describe('calculator', function () {
  context('when 10 and 5 entered', function () {
    beforeEach(function () {
      sinon.stub(window, 'prompt');

      prompt.onCall(0).returns('10');
      prompt.onCall(1).returns('5');

      calculator.read();
    });

    afterEach(function () {
      prompt.restore();
    });

    it('your first number is 10', function () {
      assert.equal(calculator.number1(), 10);
    });

    it('your second number is 5', function () {
      assert.equal(calculator.number1(), 5);
    });

    it('the sum is 15', function () {
      assert.equal(calculator.sum(), 15);
    });

    it('the multiplication product is 50', function () {
      assert.equal(calculator.mul(), 50);
    });

    it('the division product is 2', function () {
      assert.equal(calculator.div(), 2);
    });

    it('the difference is 5', function () {
      assert.equal(calculator.diff(), 5);
    });
  });
});
