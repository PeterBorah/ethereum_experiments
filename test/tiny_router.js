contract('TinyRouter', function(accounts) {
  it("should work", function(done) {
    var router;

    TinyRouter.new(Adder.deployed().address).
      then(function(result) { return router = Adder.at(result.address) }).
      then(function(router) { return router.invoke.call(2, 3) }).
      then(function(result) {
        assert.equal(result, 5);
        done();
      }).catch(done);
  });
});
