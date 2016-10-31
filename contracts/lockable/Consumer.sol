pragma solidity ^0.4.3;

import "./Lockable.sol";
import "./External.sol";

contract Consumer {
  Lockable lockable;
  External extern;
  
  function callLockable(Lockable _lockable, External _extern) {
    lockable = _lockable;
    extern = _extern;

    lockable.lockAndCall("callback()");
  }

  function callback() {
    extern.untrustedBehavior(lockable);
    lockable.increment();
  }
}
