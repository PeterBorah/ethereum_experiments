contract('Lockable', function(accounts) {
  it("should work", function(done) {
    var lockable = Lockable.deployed();
    var consumer = Consumer.deployed();
    var external = External.deployed();

    consumer.callLockable(lockable.address, external.address).
      then(function() { return lockable.get() }).
      then(function(result) {
        assert.equal(result, 1);
      }).
      then(function() { return lockable.lockHolder() }).
      then(function(result) {
        assert.equal(result, 0);
        done();
      }).catch(done);
  });
});
