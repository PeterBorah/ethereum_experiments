contract('Recurser', function(accounts) {
  it.only("should work", function(done) {
    var arg = [];
    // var length = 150; // Costs about 500k gas, despite passing the _entire_ array every time
    var length = 10;

    for (var i = 0; i < length; i++) {
      arg.push(1);
    }

    Recurser.deployed().recurse(arg).
      then(function() { return Recurser.deployed().recurse.call(arg) }).
      then(function(result) {
        assert.equal(result, length);
        done();
      }).catch(done);
  });
});
