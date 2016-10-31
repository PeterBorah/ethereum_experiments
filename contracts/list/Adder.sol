pragma solidity ^0.4.3;

contract Adder {
  function invoke(uint accumulator, uint n) returns(uint) {
    return accumulator + n;
  }
}
