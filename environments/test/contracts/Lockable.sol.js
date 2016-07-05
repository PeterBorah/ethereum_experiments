// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"signature","type":"string"}],"name":"lockAndCall","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"increment","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"lockHolder","outputs":[{"name":"","type":"address"}],"type":"function"}],
    binary: "606060405261018a806100126000396000f3606060405260e060020a60003504636d4ce63c811461003c578063c3ee63111461004a578063d09de08a146100a2578063d1696b16146100c8575b005b6000545b6060908152602090f35b608060206004803580820135601f81018490049093028401604052606083815261003a9492936024939192840191819083828082843750949650505050505050600154600160a060020a03166000146100da57610187565b61003a60015433600160a060020a03908116911614156100c6576000805460010190555b565b610040600154600160a060020a031681565b6001805473ffffffffffffffffffffffffffffffffffffffff19163317908190556040518251600160a060020a039290921691839190819060809080838184600060046003600f6020601f8701040201f150905001915050604051809103902060e060020a90046040518160e060020a0281526004018090506000604051808303816000876161da5a03f150506001805473ffffffffffffffffffffffffffffffffffffffff1916905550505b5056",
    unlinked_binary: "606060405261018a806100126000396000f3606060405260e060020a60003504636d4ce63c811461003c578063c3ee63111461004a578063d09de08a146100a2578063d1696b16146100c8575b005b6000545b6060908152602090f35b608060206004803580820135601f81018490049093028401604052606083815261003a9492936024939192840191819083828082843750949650505050505050600154600160a060020a03166000146100da57610187565b61003a60015433600160a060020a03908116911614156100c6576000805460010190555b565b610040600154600160a060020a031681565b6001805473ffffffffffffffffffffffffffffffffffffffff19163317908190556040518251600160a060020a039290921691839190819060809080838184600060046003600f6020601f8701040201f150905001915050604051809103902060e060020a90046040518160e060020a0281526004018090506000604051808303816000876161da5a03f150506001805473ffffffffffffffffffffffffffffffffffffffff1916905550505b5056",
    address: "0x1648e989fbdf92f56caf257561eb0385aa96644f",
    generated_with: "2.0.9",
    contract_name: "Lockable"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Lockable error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("Lockable error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Lockable error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Lockable error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Lockable = Contract;
  }

})();
