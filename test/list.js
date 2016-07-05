contract('List', function(accounts) {
  it("should expose the basics", function(done) {
    var list_factory = ListFactory.deployed();
    var event = list_factory.Creation({});

    event.watch(function(err, result) {
      event.stopWatching();
      if (err) { throw err }

      var list = List.at(result.args.createdAddress);

      list.push(43).
        then(function() { return list.push(23) }).
        then(function() { return list.setIndex(0, 42) }).
        then(function() { return list.length() }).
        then(function(result) {
          assert.equal(result, 2);
        }).
        then(function() { return list.getIndex(0) }).
        then(function(result) {
          assert.equal(result, 42);
        }).
        then(function() { return list.getIndex(1) }).
        then(function(result) {
          assert.equal(result, 23)
          done();
        }).catch(done);
    });

    list_factory.create().catch(done);
  });

  it("should let you map", function(done) {
    var list_factory = ListFactory.deployed();
    var event = list_factory.Creation({});

    event.watch(function(err, result) {
      event.stopWatching();
      if (err) { throw err }

      var list = List.at(result.args.createdAddress);

      var map_event = list.MapFinished({});
      map_event.watch(function(err, result) {
        map_event.stopWatching();
        if (err) { throw err }

        var new_list = List.at(result.args.createdAddress);

        new_list.length().
          then(function(result) {
            assert.equal(result, 2);
          }).
          then(function() { return new_list.getIndex(0) }).
          then(function(result) {
            assert.equal(result, 84);
          }).
          then(function() { return new_list.getIndex(1) }).
          then(function(result) {
            assert.equal(result, 46)
            done();
          }).catch(done);
      });

      list.push(42).
        then(function() { return list.push(23) }).
        then(function() { return list.map(Doubler.deployed().address) }).
        catch(done)
    });

    list_factory.create().catch(done);
  });


  it("should let you reduce", function(done) {
    var list_factory = ListFactory.deployed();
    var event = list_factory.Creation({});

    event.watch(function(err, result) {
      event.stopWatching();
      if (err) { throw err }

      var list = List.at(result.args.createdAddress);

      list.push(2).
        then(function() { return list.push(3) }).
        then(function() { return list.push(4) }).
        then(function() { return list.reduce(Multiplier.deployed().address) }).
        then(function(result) {
          assert.equal(result, 24);
          done();
        }).catch(done);
    });

    list_factory.create().catch(done);
  });

  it("should let you map/reduce in memory", function(done) {
    var list_factory = ListFactory.deployed();
    var event = list_factory.Creation({});

    event.watch(function(err, result) {
      event.stopWatching();
      if (err) { throw err }

      var list = List.at(result.args.createdAddress);

      list.push(2).
        then(function() { return list.push(3) }).
        then(function() { return list.push(4) }).
        then(function() { return list.mapReduceInMemory(Doubler.deployed().address, Multiplier.deployed().address) }).
        then(function(result) {
          assert.equal(result, 192);
          done();
        }).catch(done);
    });

    list_factory.create().catch(done);
  });
});
