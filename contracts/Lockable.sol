contract Lockable {
  uint data;
  address public lockHolder;

  modifier requiresLock { if (lockHolder == msg.sender) _ }

  function get() constant returns(uint) {
    return data;
  }

  function increment() requiresLock {
    data += 1;
  }

  function lockAndCall(string signature) {
    if (lockHolder != 0) return;

    lockHolder = msg.sender;
    lockHolder.call(bytes4(sha3(signature)));
    lockHolder = 0;
  }
}
