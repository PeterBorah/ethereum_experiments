import "lockable/Lockable.sol";
import "lockable/External.sol";

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
