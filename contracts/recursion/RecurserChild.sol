pragma solidity ^0.4.3;

contract RecurserChild {
  RecurserChild other;

  function setOther(RecurserChild _other) {
    other = _other;
  }

  function recurse(uint acc, uint i, uint[] list) returns(uint) {
    if (i == list.length) { 
      return acc;
    } else {
      return other.recurse(acc += list[i], i += 1, list);
    }
  }
}
