contract TinierRouter {
  address constant destination = 0x4d02bad3192a089bbf9bd0056861c993a4136d36;

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
