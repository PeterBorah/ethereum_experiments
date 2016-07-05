// Under 100k gas to create.
contract TinyRouter {
  address destination;

  function TinyRouter(address _destination) {
    destination = _destination;
  }

  function() {
    uint r;
    address dest = destination;

    assembly {
      calldatacopy(mload(0x40), 0, calldatasize)
      r := delegatecall(sub(gas, 10000), dest, mload(0x40), calldatasize, mload(0x40), 32)
    }
    if (r != 1) { throw;}
    assembly {
      return(mload(0x40), 32)
    }
  }
}
