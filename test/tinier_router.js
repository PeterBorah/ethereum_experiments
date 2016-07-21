contract('TinierRouter', function(accounts) {
  it("should deploy", function(done) {
    TinierRouter.new().
      then(function() {
        done();
      }).catch(done);
  });
});
