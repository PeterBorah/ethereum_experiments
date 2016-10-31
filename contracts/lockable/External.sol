pragma solidity ^0.4.3;

import "./Lockable.sol";

contract External {
  function untrustedBehavior(Lockable _lockable) {
    _lockable.increment();
  }
}
