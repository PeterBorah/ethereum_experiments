import "Lockable.sol";

contract External {
  function untrustedBehavior(Lockable _lockable) {
    _lockable.increment();
  }
}
