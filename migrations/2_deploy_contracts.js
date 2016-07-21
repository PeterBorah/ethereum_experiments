module.exports = function(deployer) {
  deployer.deploy([
    Lockable,
    Consumer,
    External,
    ListFactory,
    Doubler,
    Multiplier,
    Adder
  ]);
};
