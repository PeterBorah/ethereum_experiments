// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"callback","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_lockable","type":"address"},{"name":"_extern","type":"address"}],"name":"callLockable","outputs":[],"type":"function"}],
    binary: "606060405261019c806100126000396000f3606060405260e060020a6000350463083b27328114610026578063ff2a3c28146100e3575b005b610024600080546001547fba31b930000000000000000000000000000000000000000000000000000000006060908152600160a060020a0392831660645291169163ba31b930916084919060248183876161da5a03f11561000257505060008054604080517fd09de08a0000000000000000000000000000000000000000000000000000000081529051600160a060020a0392909216935063d09de08a926004828101939192829003018183876161da5a03f11561000257505050565b6100246004356024356000805473ffffffffffffffffffffffffffffffffffffffff1990811684178083556001805490921684179091557fc3ee631100000000000000000000000000000000000000000000000000000000606090815260206064908152600a6084527f63616c6c6261636b28290000000000000000000000000000000000000000000060a452600160a060020a03929092169263c3ee63119260c492908183876161da5a03f11561000257505050505056",
    unlinked_binary: "606060405261019c806100126000396000f3606060405260e060020a6000350463083b27328114610026578063ff2a3c28146100e3575b005b610024600080546001547fba31b930000000000000000000000000000000000000000000000000000000006060908152600160a060020a0392831660645291169163ba31b930916084919060248183876161da5a03f11561000257505060008054604080517fd09de08a0000000000000000000000000000000000000000000000000000000081529051600160a060020a0392909216935063d09de08a926004828101939192829003018183876161da5a03f11561000257505050565b6100246004356024356000805473ffffffffffffffffffffffffffffffffffffffff1990811684178083556001805490921684179091557fc3ee631100000000000000000000000000000000000000000000000000000000606090815260206064908152600a6084527f63616c6c6261636b28290000000000000000000000000000000000000000000060a452600160a060020a03929092169263c3ee63119260c492908183876161da5a03f11561000257505050505056",
    address: "0xb64f6e0cf1a765b65bbc89c64ebdd7b714a88411",
    generated_with: "2.0.9",
    contract_name: "Consumer"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Consumer error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("Consumer error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Consumer error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Consumer error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Consumer = Contract;
  }

})();
