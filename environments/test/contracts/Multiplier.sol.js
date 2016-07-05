// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"accumulator","type":"uint256"},{"name":"n","type":"uint256"}],"name":"invoke","outputs":[{"name":"","type":"uint256"}],"type":"function"}],
    binary: "6060604052602b8060106000396000f3606060405260e060020a600035046333298e258114601a575b005b602435600435026060908152602090f3",
    unlinked_binary: "6060604052602b8060106000396000f3606060405260e060020a600035046333298e258114601a575b005b602435600435026060908152602090f3",
    address: "0x4110749ce57045713d64af7a0f9f9c000d816087",
    generated_with: "2.0.9",
    contract_name: "Multiplier"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Multiplier error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Multiplier error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Multiplier error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Multiplier error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Multiplier = Contract;
  }

})();
