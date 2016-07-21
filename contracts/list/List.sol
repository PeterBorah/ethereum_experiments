import "./ListFactoryStub.sol";
import "./Lambda.sol";

contract List {
  uint[] data;
  ListFactoryStub factory;

  event MapFinished(address createdAddress);

  function List() {
    factory = ListFactoryStub(msg.sender);
  }

  function push(uint n) {
    data.push(n);
  }

  function setIndex(uint index, uint n) {
    data[index] = n;
  }

  function length() constant returns(uint) {
    return data.length;
  }

  function getIndex(uint index) constant returns(uint) {
    return data[index];
  }

  function map(Lambda lambda) {
    List newList = List(factory.create());
    uint mappedValue;

    for (uint i = 0; i < data.length; i++) {
      mappedValue = lambda.invoke(data[i]);
      newList.push(mappedValue);
    }

    MapFinished(address(newList));
  }

  function reduce(Lambda lambda) constant returns(uint) {
    uint accumulator = data[0];

    // Start at 1, so you can use 0 as the base accumulator
    for (uint i = 1; i < data.length; i++) {
      accumulator = lambda.invoke(accumulator, data[i]);
    }

    return accumulator;
  }

  function mapReduceInMemory(Lambda mapper, Lambda reducer) constant returns(uint) {
    uint[] memory tempList = new uint[](data.length);
    uint mappedValue;

    for (uint i = 0; i < data.length; i++) {
      mappedValue = mapper.invoke(data[i]);
      tempList[i] = mappedValue;
    }

    uint accumulator = tempList[0];

    // Start at 1, so you can use 0 as the base accumulator
    for (i = 1; i < data.length; i++) {
      accumulator = reducer.invoke(accumulator, tempList[i]);
    }

    return accumulator;
  }
}
